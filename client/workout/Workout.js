import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import { connect } from 'react-redux';
import ExerciseInfo from '../exercise/ExerciseInfo';
import WorkoutForm from './WorkoutForm';
import { update } from '../routine/api-routine';
import auth from '../auth/auth-helper';
import { updateWorkoutData, updateRoutine } from '../../redux/actions/routines';

const styles = theme => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '24px',
  },
  leftAligned: {
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: '60%',
    },
  },
});

const mapStateToProps = state => ({
  workout: state.routines.data
    .find(routine => routine._id === state.routines.SelectedRoutine).workouts
    .find(workout => workout._id === state.routines.SelectedWorkout),
  routine: state.routines.data.find(routine => routine._id === state.routines.SelectedRoutine),
});
class Workout extends React.Component {
    state = {
      activeStep: 0,
      workout: this.props.workout, /* eslint-disable-line react/destructuring-assignment */
      error: '',
    };

    handleNext = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    };

    handleBack = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
      }));
    };

    handleReturn = () => {
      const { handleReturn } = this.props;
      handleReturn();
    }

    handleSaveAndReturn = () => {
      const { dispatch, routine } = this.props;
      const { workout } = this.state;
      this.saveRepsAndWeights();
      dispatch(updateWorkoutData(workout));
      const jwt = auth.isAuthenticated();
      update({
        routineId: routine._id,
      }, {
        t: jwt.token,
      }, routine).then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          dispatch(updateRoutine(data));
          this.handleReturn();
        }
      });
    }

    handleNumberChange = name => (event) => {
      const { workout, activeStep } = this.state;
      const { value } = event.target;
      const newWorkout = Object.assign({}, workout);

      newWorkout.exercises = newWorkout.exercises.map((exercise) => {
        if (exercise._id === workout.exercises[activeStep]._id) {
          return Object.assign({}, exercise, { [name]: value > 3 ? value.slice(0, 3) : value });
        }
        return exercise;
      });
      this.setState({ workout: newWorkout });
    };

    saveRepsAndWeights = () => {
      const { workout } = this.state;
      const newWorkout = Object.assign({}, workout);
      newWorkout.exercises = newWorkout.exercises.map((exercise) => {
        if (exercise.currentWeight > 0) exercise.previousWeights.push(exercise.currentWeight);
        if (exercise.currentRepetitions > 0) {
          exercise.previousRepetitions
            .push(exercise.currentRepetitions);
        }
        exercise.currentWeight = '';
        exercise.currentRepetitions = '';
        return exercise;
      });

      this.setState({ workout: newWorkout });
    }

    render() {
      const { classes, theme } = this.props;
      const { activeStep, workout } = this.state;
      const maxSteps = workout.exercises.length;
      const activeStepInfo = workout.exercises[activeStep];

      return (
        <div className={classes.root}>
          <ExerciseInfo activeStepInfo={activeStepInfo} isWorkout />
          <WorkoutForm
            activeStepInfo={activeStepInfo}
            handleNumberChange={this.handleNumberChange}
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={activeStep !== maxSteps - 1
              ? (
                <Button size="small" onClick={this.handleNext}>
                    Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              )
              : (
                <Button size="small" onClick={this.handleSaveAndReturn}>
                  <KeyboardReturn />
                        Save
                </Button>
              )
                }
            backButton={
                    activeStep !== 0
                      ? (
                        <Button size="small" onClick={this.handleBack}>
                          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                        </Button>
                      )
                      : (
                        <Button size="small" onClick={this.handleReturn}>
                          <KeyboardReturn />
                        Return
                        </Button>
                      )
                }
          />
        </div>
      );
    }
}
Workout.propTypes = {
  workout: PropTypes.object.isRequired,
  routine: PropTypes.object.isRequired,
  handleReturn: PropTypes.func.isRequired,
  classes: PropTypes.any.isRequired,
  theme: PropTypes.any.isRequired,
  dispatch: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Workout));
