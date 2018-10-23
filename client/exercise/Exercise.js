import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import { connect } from 'react-redux';
import SearchBox from '../SearchBox/SearchBox';
import ExerciseForm from './ExerciseForm';
import ExerciseInfo from './ExerciseInfo';
import { selectExercise, createExercise, updateExercise } from '../../redux/actions/routines';

const styles = theme => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: '24px',
  },
  leftAligned: {
    textAlign: 'left',
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      maxWidth: '60%',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '24px',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
});

const mapStateToProps = state => ({
  exercise: state.routines.data
    .find(routine => routine._id === state.routines.SelectedRoutine).workouts
    .find(workout => workout._id === state.routines.SelectedWorkout).exercises
    .find(exercise => exercise._id === state.routines.SelectedExercise),
  SelectedExercise: state.routines.SelectedExercise,
});

class Exercise extends React.Component {
    state = {
      exercise: [],
      loading: false,
    }

    componentWillMount() {
      const { exercise } = this.props;
      this.setState({ exercise: exercise || [] });
    }

    fetchComments = (suggestion) => {
      fetch(`https://wger.de/api/v2/exercisecomment/?exercise=${suggestion.id}`)
        .then(response => response.json())
        .then((data) => {
          const comments = data.results.map(comment => comment.comment).join('. ');
          this.setState(prevState => ({
            exercise: Object.assign({}, prevState.exercise, {
              extra: data.count > 0
                ? comments
                : '',
            }),
          }), () => { this.fetchImages(suggestion); });
        });
    }

    fetchImages = (suggestion) => {
      fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${suggestion.id}`)
        .then(response => response.json())
        .then((data) => {
          const arrImg = data.count > 0
            ? data.results.map(image => image.image) : [];
          this.setState(prevState => ({
            exercise: Object.assign({},
              prevState.exercise, { images: arrImg || [] }),
            loading: false,
          }));
        });
    }

    handleReturn = () => {
      const { dispatch } = this.props;
      dispatch(selectExercise(null));
    }

    handleExerciseSave = () => {
      const { exercise } = this.state;
      const { dispatch, handleExerciseSave, SelectedExercise } = this.props;
      if (SelectedExercise.length === 0) dispatch(createExercise(exercise));
      else dispatch(updateExercise(exercise));
      handleExerciseSave(exercise);
    }

    handleExerciseDelete = () => {
      const { exercise } = this.state;
      const { handleExerciseDelete } = this.props;
      handleExerciseDelete(exercise._id);
    }

    handleNumberChange = name => (event) => {
      const { value } = event.target;
      this.setState(prevState => ({
        exercise: Object.assign({},
          prevState.exercise, {
            [name]: value > 3
              ? value.slice(0, 3)
              : value,
          }),
      }));
    };

    populateExercise = (suggestion) => {
      // fetching comments
      this.fetchComments(suggestion);
      this.setState(prevState => ({
        exercise: Object.assign({},
          prevState.exercise, { ...suggestion }),
        loading: true,
      }));
    }

    render() {
      const { classes } = this.props;
      const { exercise, loading } = this.state;
      return (
        <div className={classes.root}>
          <SearchBox populateExercise={this.populateExercise} />
          <ExerciseInfo
            activeStepInfo={exercise}
          />
          <ExerciseForm
            activeStepInfo={exercise}
            handleNumberChange={this.handleNumberChange}
          />
          <div className={classes.buttonContainer}>
            <Button size="small" onClick={this.handleReturn}>
              <KeyboardReturn />
                        Return
            </Button>
            <Button
              variant="contained"
              onClick={this.handleExerciseSave}
              className={classes.button}
              disabled={loading || exercise.length === 0}
            >
                        Save
            </Button>
          </div>
        </div>
      );
    }
}
Exercise.propTypes = {
  SelectedExercise: PropTypes.any.isRequired,
  exercise: PropTypes.object,
  handleExerciseSave: PropTypes.func.isRequired,
  handleExerciseDelete: PropTypes.func,
  classes: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
};
Exercise.defaultProps = {
  exercise: {},
  handleExerciseDelete: () => {},
};
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Exercise));
