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
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';

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
        justifyContent: 'center',
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
        maxWidth: '100%',
        display:'flex',
        justifyContent:'center'
    },
    leftAligned : {
        textAlign : 'left'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 130,
    },
    [theme.breakpoints.up('sm')]: {
        root: {
          maxWidth: '60%',
        }
      },
      [theme.breakpoints.up('md')]: {
        imageContainer:{
            maxWidth: '50%',
            float:'left'
        }
      },
  });

class Workout extends React.Component {
    state = {
        activeStep: 0,
        weight:0,
        repetitions:0
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

      handleReturn = () =>{
          this.props.handleReturn();
      }

      handleNumberChange = name => event => {
        this.setState({
          [name]: event.target.value > 3 ? event.target.value.slice(0,3): event.target.value,
        });
      };
      

render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = this.props.workout.exercises.length;
    const activeStepInfo = this.props.workout.exercises[activeStep];
    return (
      <div className={classes.root}>
        
        <Card className={classes.card}>
            <CardHeader
            title={activeStepInfo.name}
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
            <CardContent>
                <Typography component="p" className={classes.leftAligned}>
                   {activeStepInfo.description}
                </Typography>
                <br></br>
                <Typography className={classes.title} color="textSecondary" className={classes.leftAligned}>
                    {activeStepInfo.extra}
                </Typography>
                
                <pre className={classes.leftAligned}>
                    <b>Sets:</b> {activeStepInfo.sets}    <b>Repetitions</b>:{activeStepInfo.reps}
                </pre>
            </CardContent>
            <CardContent>
                <Paper>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-read-only-input"
                            label="Last Reps"
                            defaultValue={activeStepInfo.prevReps}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Repetitions"
                            value={this.state.repetitions}
                            onChange={this.handleNumberChange('repetitions')}
                            type="number"
                            className={classes.textField}
                            inputProps={{
                                min: "0", 
                                max: "999"
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Last Weigth"
                            defaultValue={activeStepInfo.prevWeight}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                              }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-number"
                            label="Weight"
                            value={this.state.weight}
                            onChange={this.handleNumberChange('weight')}
                            type="number"
                            className={classes.textField}
                            inputProps={{
                                min: "0", 
                                max: "999"
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                </Paper>
            </CardContent>
        </Card>
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