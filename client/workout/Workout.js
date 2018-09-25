import ExerciseDetails from '../exercise/ExerciseDetails';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

import WorkoutInfo from './WorkoutInfo'
import WorkoutForm from './WorkoutForm'

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginTop: theme.spacing.unit * 5
      },
    leftAligned : {
        textAlign : 'left'
    },
    [theme.breakpoints.up('sm')]: {
        root: {
          maxWidth: '60%',
        }
    },
  });

class Workout extends React.Component {
    state = {
        activeStep: 0,
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

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;

        const maxSteps = this.props.workout.exercises.length;
        const activeStepInfo = this.props.workout.exercises[activeStep];
        return (
        <div className={classes.root}>
            
            <WorkoutInfo activeStepInfo={activeStepInfo}/>
            <WorkoutForm activeStepInfo={activeStepInfo}/>
            
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
                <Button size="small" onClick={this.handleReturn}>
                <KeyboardReturn />
                Return
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