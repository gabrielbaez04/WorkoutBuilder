import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import ExerciseInfo from '../exercise/ExerciseInfo'
import WorkoutForm from './WorkoutForm'
import { update } from '../routine/api-routine'
import auth from './../auth/auth-helper'
import { connect } from 'react-redux'
import {updateWorkoutData, updateRoutine} from '../../redux/actions/routines'

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '24px'
      },
    leftAligned : {
        textAlign : 'left'
    },
    [theme.breakpoints.up('md')]: {
        root: {
          maxWidth: '60%',
        }
    },
  });

const mapStateToProps = state => {
    return {
        workout: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ).workouts.find(workout=>
            workout._id == state.routines.SelectedWorkout),
        SelectedWorkout : state.routines.SelectedWorkout,
        routine: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ),
    }
}
class Workout extends React.Component {
    state = {
        activeStep: 0,
        workout: this.props.workout,
        error: ''
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

    handleReturn = () =>{
        this.props.handleReturn();
    }

    handleSaveAndReturn = () =>{
        this.saveRepsAndWeights();
        this.props.dispatch(updateWorkoutData(this.state.workout)); 
        const jwt = auth.isAuthenticated();
        update({
            routineId: this.props.routine._id
            }, {
            t: jwt.token
            }, this.props.routine).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.props.dispatch(updateRoutine(data)); 
                this.handleReturn();
            }
        })
    }

    handleNumberChange = (name) => event => {
        var newWorkout = Object.assign({},this.state.workout);
        newWorkout.exercises = newWorkout.exercises.map((exercise,index)=>{
            if(exercise._id == this.state.workout.exercises[this.state.activeStep]._id)
            {
                return Object.assign({},exercise,{[name]: event.target.value > 3 ? event.target.value.slice(0,3): event.target.value})
            }
            return exercise
        });
        this.setState({workout: newWorkout});     
    };

    saveRepsAndWeights = () =>{
        var newWorkout = Object.assign({},this.state.workout);
        newWorkout.exercises = newWorkout.exercises.map((exercise,index)=>{
            exercise.currentWeight > 0 && exercise.previousWeights.push(exercise.currentWeight);
            exercise.currentRepetitions > 0 && exercise.previousRepetitions.push(exercise.currentRepetitions);
            exercise.currentWeight = '';
            exercise.currentRepetitions = '';
            return exercise;
        });
        
        this.setState({workout: newWorkout});
    }

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = this.state.workout.exercises.length;
        const activeStepInfo = this.state.workout.exercises[activeStep];

        return (
        <div className={classes.root}>
            <ExerciseInfo activeStepInfo={activeStepInfo} isWorkout={true}/>
            <WorkoutForm activeStepInfo={activeStepInfo}
                         handleNumberChange={this.handleNumberChange}/>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.mobileStepper}
                nextButton={ activeStep != maxSteps - 1 
                    ? <Button size="small" onClick={this.handleNext}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    : <Button size="small" onClick={this.handleSaveAndReturn}>
                        <KeyboardReturn />
                        Save
                    </Button>
                }
                backButton={
                    activeStep != 0
                    ? <Button size="small" onClick={this.handleBack}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                    : <Button size="small" onClick={this.handleReturn}>
                        <KeyboardReturn />
                        Return
                    </Button>
                }
            />
        </div>
        );
    }
}
Workout.propTypes = {
    SelectedWorkout: PropTypes.any.isRequired,
    workout: PropTypes.object.isRequired,
    routine: PropTypes.object.isRequired,
    handleReturn: PropTypes.func.isRequired,
    classes: PropTypes.any.isRequired,
    theme: PropTypes.any.isRequired
}
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Workout));