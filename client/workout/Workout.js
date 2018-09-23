import ExerciseDetails from './ExerciseDetails';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      marginBottom: 20,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
        cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize:50,
        width:'30%'
    },
    cardContent: {
        flexGrow: 1,
        padding: `0px ${theme.spacing.unit}px`
    },
    cardHeader:{
        padding: `${theme.spacing.unit}px`
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: `0px ${theme.spacing.unit}px ${theme.spacing.unit}px`
    },
    imageContainer:{
        display:'flex',
        justifyContent:'center'
    }
  });

class Workout extends React.Component {
    state = {
        activeStep: 0,
      };
    getWorkoutImages(){
        var images=[];
        this.props.workout.exercises.forEach((exercise)=>{
            exercise.images.forEach((image)=>{
                images.push(image); 
            }) 
        })
        return images.length > 3 ? images.slice(0,3) : images;
    }         
        

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

render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = this.props.workout.exercises.length;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
            <CardHeader
            title={this.props.workout.exercises[activeStep].name}
            className={classes.cardHeader}
            />
            <div className={classes.imageContainer}>
            {this.getWorkoutImages().map((image,index)=>{
                return(<CardMedia
                    key={index}
                    className={classes.cardMedia}
                    image={image}
                    title="workout title"
                />)
            })}
            </div>
        </Card>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(Workout);

/*<button className="ui left floated icon button compact blue big backButton" onClick={this.props.handleBackClick}>
                    <i className="icon undo customSmallButton"></i>
                </button>
                <h2 className="ui center aligned icon header">
                <i className="circular child icon"></i>
                Runing Workout
                </h2>
                <div className='ui segment workoutsContainer'>
                    <div className="ui shape">
                        <div className="sides">
                            {this.state.exercises && this.state.exercises.map((exercise, index) =>{
                                var activeSide = index==0 ? 'active' : '';
                                    return <div className={activeSide + " side"+index+" side"}  key={index}>
                                                <ExerciseDetails
                                                    exercise={exercise}
                                                    />                            
                                            </div>
                            })}
                        </div>
                    </div>
                    <div className="ui clearing segment workoutButtons">
                    
                    {this.state.currentSide!=this.state.exercises.length-1 &&
                            <button className="ui right floated icon button compact blue big" onClick={this.handleStepForwardClick}>
                                <i className="icon step forward customSmallButton"></i>
                            </button>

                    }
                    {this.state.currentSide!=0 &&
                            <button className="ui compact icon button blue big" onClick={this.handleStepBackwardClick}>
                                <i className="icon step backward customSmallButton"></i>  
                            </button>  
                    }
                    </div>
                </div>
                 */