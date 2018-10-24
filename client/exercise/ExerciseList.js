import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { update } from '../routine/api-routine';
import {
  selectWorkout, selectExercise, updateWorkout, createWorkout, updateRoutine,
} from '../../redux/actions/routines';
import Exercise from './Exercise';
import ExerciseListItem from './ExerciseListItem';
import auth from '../auth/auth-helper';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  ExercisesContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  justify: {
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    margin: '0px 5px',
  },
  workoutName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textField: {
    width: '80%',

  },
  saved: {
    verticalAlign: 'middle',
    color: 'green',
  },
  savedMessage: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  workout: state.routines.data
    .find(routine => routine._id === state.routines.SelectedRoutine).workouts
    .find(workout => workout._id === state.routines.SelectedWorkout),
  SelectedExercise: state.routines.SelectedExercise,
  SelectedWorkout: state.routines.SelectedWorkout,
  routine: state.routines.data.find(routine => routine._id === state.routines.SelectedRoutine),
});

class ExerciseList extends React.Component {
    state = {
      saved: false,
      name: this.props.workout ? this.props.workout.name : '', /* eslint-disable-line react/destructuring-assignment */
    }

    handleAddClick = () => {
      const { dispatch } = this.props;
      dispatch(selectExercise([]));
    }

    handleSaveClick = () => {
      const { dispatch, SelectedWorkout } = this.props;
      const { name } = this.state;
      if (SelectedWorkout.length === 0) dispatch(createWorkout(name));
      else dispatch(updateWorkout(name));
      this.handleSave();
    }

    handleReturn = () => {
      const { dispatch } = this.props;
      dispatch(selectWorkout(null));
    }

    handleChange = name => (event) => {
      this.setState({ [name]: event.target.value });
    };

    handleSave = () => {
      const { dispatch, routine, SelectedWorkout } = this.props;
      const jwt = auth.isAuthenticated();
      update({
        routineId: routine._id,
      }, {
        t: jwt.token,
      }, routine).then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          console.log(data);
          this.setState({ saved: true });
          dispatch(updateRoutine(data));
          dispatch(selectExercise(null));
          if (SelectedWorkout.length === 0) {
            dispatch(selectWorkout(data.workouts[data.workouts.length - 1]._id));
          }
        }
      });
    };

    render() {
      const {
        classes, workout, SelectedWorkout, SelectedExercise,
      } = this.props;
      const { saved, name } = this.state;
      const { exercises = [] } = workout || {};
      return (
        <div>
          {!SelectedExercise
                    && (
                    <div>
                      <div className={classes.workoutName}>
                        <TextField
                          id="standard-name"
                          label="Workout Name"
                          className={classes.textField}
                          value={name}
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                      </div>
                      <div className={classNames(classes.layout, classes.cardGrid)}>
                        <Grid container spacing={40} className={classes.justify}>
                          {exercises.map(exercise => (
                            <ExerciseListItem
                              key={exercise._id}
                              exercise={exercise}
                              handleGoClick={this.handleGoClick}
                              handleEditClick={this.handleEditClick}
                              handleExerciseDelete={this.handleExerciseDelete}
                              handleSave={this.handleSave}
                            />
                          ))}
                        </Grid>
                      </div>
                      <div className={classes.buttonContainer}>
                        <Button size="small" onClick={this.handleReturn}>
                          <KeyboardReturn />
                                Return
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleAddClick}
                          className={classes.button}
                          disabled={SelectedWorkout.length === 0}
                        >
                                Add Exercise
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleSaveClick}
                          className={classes.button}
                          disabled={name === ''}
                        >
                                Save
                        </Button>
                      </div>
                      {saved && (
                      <div className={classes.savedMessage}>
                        <Typography component="p" color="primary">
                          <Icon color="primary" className={classes.saved}>check_circle</Icon>
                                    Workout Saved!
                        </Typography>
                      </div>)
                        }
                    </div>
                    )

                }
          {SelectedExercise
                    && (
                    <Exercise
                      exercise={SelectedExercise}
                      handleReturn={this.handleReturnClick}
                      handleExerciseSave={this.handleSave}
                    />
                    )
                }
        </div>
      );
    }
}
ExerciseList.propTypes = {
  SelectedWorkout: PropTypes.any.isRequired,
  SelectedExercise: PropTypes.any,
  workout: PropTypes.object,
  routine: PropTypes.object.isRequired,
  classes: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
};
ExerciseList.defaultProps = {
  workout: {},
  SelectedExercise: {},
};
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ExerciseList));
