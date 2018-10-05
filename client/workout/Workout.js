import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import ExerciseInfo from '../exercise/ExerciseInfo'
import WorkoutForm from './WorkoutForm'
import {update} from '../workout/api-workout'
import auth from './../auth/auth-helper'

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginTop: theme.spacing.unit
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

class Workout extends React.Component {
    state = {
        activeStep: 0,
        workout: null,
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
        const jwt = auth.isAuthenticated();
        update({
            workoutId: this.state.workout._id
            }, {
            t: jwt.token
            }, this.state.workout).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
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
        this.setState({
            workout: newWorkout
        });
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
        
        this.setState({
            workout: newWorkout
        });
    }

    componentWillMount(){
        this.setState({workout: this.props.workout})
    }

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;

        const maxSteps = this.state.workout.exercises.length;
        const activeStepInfo = this.state.workout.exercises[activeStep];
        return (
        <div className={classes.root}>
            
            <ExerciseInfo activeStepInfo={activeStepInfo} isWorkout={1}/>
            <WorkoutForm activeStepInfo={activeStepInfo}
                         handleNumberChange={this.handleNumberChange}/>
            <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={ activeStep != maxSteps - 1 ?
                <Button size="small" onClick={this.handleNext}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                :
                <Button size="small" onClick={this.handleSaveAndReturn}>
                    <KeyboardReturn />
                    Save
                </Button>
            }
            backButton={
                activeStep != 0 ?
                <Button size="small" onClick={this.handleBack}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
                </Button>
                :
                <Button size="small" onClick={this.handleReturn}>
                    <KeyboardReturn />
                    Return
                </Button>
            }
            />
        </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Workout);