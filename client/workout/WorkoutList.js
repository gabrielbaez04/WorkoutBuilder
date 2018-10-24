import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import TextField from '@material-ui/core/TextField';
import {
  selectRoutine, selectWorkout, updateRoutine, createRoutine, updateRoutineName,
} from '../../redux/actions/routines';
import { update, create } from '../routine/api-routine';
import auth from '../auth/auth-helper';
import ExerciseList from '../exercise/ExerciseList';
import Workout from './Workout';
import WorkoutListItem from './WorkoutListItem';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  workoutsContainer: {
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
  routineName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textField: {
    width: '80%',
  },
});

const mapStateToProps = state => ({
  routine: state.routines.data.find(routine => routine._id == state.routines.SelectedRoutine),
  SelectedRoutine: state.routines.SelectedRoutine,
  SelectedWorkout: state.routines.SelectedWorkout,
});

class WorkoutList extends React.Component {
    state = {
      error: '',
      saved: false,
      run: false,
      name: this.props.routine ? this.props.routine.name : '', /* eslint-disable-line react/destructuring-assignment */
    }

    handleGoClick = (workoutId) => {
      const { dispatch } = this.props;
      this.setState({ run: true });
      dispatch(selectWorkout(workoutId));
    }

    handleAddClick = () => {
      const { dispatch } = this.props;
      dispatch(selectWorkout([]));
    }

    handleReturn = () => {
      const { dispatch } = this.props;
      dispatch(selectWorkout(null));
      this.setState({ run: false });
    }

    handleBack = () => {
      const { dispatch } = this.props;
      dispatch(selectRoutine(null));
    }

    handleSaveClick = () => {
      const { dispatch, SelectedRoutine } = this.props;
      const { name } = this.state;
      if (SelectedRoutine.length > 0) dispatch(updateRoutineName(name));
      else this.handleSave();
    }

    handleChange = name => (event) => {
      const { value } = event.target;
      this.setState({ [name]: value });
    };

    handleSave = () => {
      const { dispatch, SelectedRoutine, routine } = this.props;
      const { name } = this.state;
      const jwt = auth.isAuthenticated();
      if (SelectedRoutine.length > 0) {
        update({
          routineId: routine._id,
        }, {
          t: jwt.token,
        }, routine).then((data) => {
          if (data.error) {
            this.setState({ error: data.error });
          } else {
            this.setState({ saved: true });
            dispatch(updateRoutine(data));
          }
        });
      } else {
        create({ name, userId: jwt.user._id }).then((data) => {
          if (data.error) {
            this.setState({ error: data.error });
          } else {
            this.setState({ saved: true });
            dispatch(createRoutine(data));
            if (SelectedRoutine.length === 0) {
              dispatch(selectRoutine(data._id));
            }
          }
        });
      }
    };

    render() {
      const {
        classes, routine, SelectedWorkout, SelectedRoutine,
      } = this.props;
      const { name, run } = this.state;
      const { workouts = [] } = routine || {};
      return (
        <div>
          {!SelectedWorkout
                    && (
                    <div>
                      <div className={classes.routineName}>
                        <TextField
                          id="standard-name"
                          label="Routine Name"
                          className={classes.textField}
                          value={name}
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                      </div>
                      <div className={classNames(classes.layout, classes.cardGrid)}>
                        <Grid container spacing={40} className={classes.justify}>
                          {workouts.map(workout => (
                            <WorkoutListItem
                              key={workout._id}
                              workout={workout}
                              handleGoClick={this.handleGoClick}
                              handleSave={this.handleSave}
                            />
                          ))}
                        </Grid>
                      </div>
                      <div className={classes.buttonContainer}>
                        <Button size="small" onClick={this.handleBack}>
                          <KeyboardReturn />
                                Return
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleAddClick}
                          className={classes.button}
                          disabled={SelectedRoutine.length === 0}
                        >
                                Add Workout
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
                    </div>
                    )

                }
          {run && SelectedWorkout
                    && (
                    <Workout
                      handleReturn={this.handleReturn}
                    />
                    )
                }
          {!run && SelectedWorkout
                    && <ExerciseList />
                }
        </div>
      );
    }
}
WorkoutList.propTypes = {
  SelectedWorkout: PropTypes.any,
  SelectedRoutine: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  dispatch: PropTypes.object.isRequired,
  routine: PropTypes.object,
};
WorkoutList.defaultProps = {
  routine: null,
  SelectedWorkout: null,
};
export default connect(mapStateToProps)(withStyles(styles)(WorkoutList));
