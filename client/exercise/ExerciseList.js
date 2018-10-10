import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExerciseListItem from './ExerciseListItem';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import Exercise from './Exercise';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {create, update} from '../routine/api-routine'
import auth from './../auth/auth-helper'
import Icon from '@material-ui/core/Icon'
import {selectWorkout, selectExercise} from '../../redux/actions/routines'
import { connect } from 'react-redux'

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
      justify:{
        justifyContent: 'center'
      },
      buttonContainer:{
          display:'flex',
          justifyContent: 'center',
          marginBottom: '10px',
      },
      button:{
        backgroundColor:theme.palette.primary.main, 
        color:'white',
        margin: '0px 5px'
    },
    workoutName:{
        textAlign: 'center',
        fontWeight:'bold'
    },
    textField:{
        width:'80%',
        
    },
    saved: {
        verticalAlign: 'middle',
        color:'green'
    },
    savedMessage:{
        textAlign:'center'
    }
  });

const mapStateToProps = state => {
    return {
        workout: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ).workouts.find(workout=>
            workout._id == state.routines.SelectedWorkout),
        SelectedRoutine : state.routines.SelectedRoutine,
        SelectedWorkout : state.routines.SelectedWorkout,
        SelectedExercise : state.routines.SelectedExercise,
        routine: state.routines.data
    }
}

class ExerciseList extends React.Component {
    state = {
        saved: false,
        isNew: this.props.isNew
    }
    handleGoClick = (Exercise) =>{
        this.setState({editExercise: Exercise});
    }
    handleReturnClick = () =>{
        this.setState({editExercise: null, editExercise:null});
    }
    handleEditClick = (Exercise) =>{
        this.setState({editExercise: Exercise});
    }
    handleAddClick = () =>{
        this.props.dispatch(selectExercise([]));
    }
    handleReturn = () =>{
        this.props.dispatch(selectWorkout(null));
    }
    handleChange = name => event => {
        this.setState({workout : Object.assign({},this.state.workout,{[name]: event.target.value})})
    };
    handleSave = () => {
        const jwt = auth.isAuthenticated();
        update({
            routineId: this.props.SelectedRoutine
            }, {
            t: jwt.token
            }, this.props.routine).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({saved: true})
                this.props.dispatch(selectExercise(null));
            }
        })
    };

    handleExerciseDelete = exerciseId => {
        this.setState({workout : Object.assign({},this.state.workout,
                                {exercises: this.state.workout.exercises.filter((exercise)=>{return exercise._id != exerciseId})})},
                                ()=>{ this.clickSave()})
    };

    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.props.SelectedExercise && 
                    <div>
                        <div className={classes.workoutName}>
                            <TextField
                                id="standard-name"
                                label="Workout Name"
                                className={classes.textField}
                                value={this.props.workout.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        </div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {this.props.workout && this.props.workout.exercises && this.props.workout.exercises.map((exercise,index) => (
                                    <ExerciseListItem
                                        key={index} 
                                        exercise={exercise}
                                        handleGoClick={this.handleGoClick}
                                        handleEditClick={this.handleEditClick}
                                        handleExerciseDelete = {this.handleExerciseDelete}
                                        />
                                ))}
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button size="small" onClick={this.handleReturn}>
                                <KeyboardReturn />
                                Return
                            </Button>
                            <Button variant="contained" 
                                    onClick={this.handleAddClick}
                                    className={classes.button}
                                    disabled={this.props.workout.name == ""}
                                    >
                                Add Exercise
                            </Button>
                            <Button variant="contained" 
                                onClick={this.clickSave}
                                className={classes.button}
                                disabled={this.props.workout.name == ""}>
                                Save
                            </Button>
                        </div>
                        {this.state.saved && (
                            <div className={classes.savedMessage}>
                            <Typography component="p" color="primary">
                                <Icon color="primary" className={classes.saved}>check_circle</Icon>
                                    Workout Saved!
                                </Typography>
                            </div>)
                        }
                    </div>
                    
                }
                {this.props.SelectedExercise
                    && <Exercise
                            exercise = {this.props.SelectedExercise}
                            handleReturn = {this.handleReturnClick}
                            handleExerciseSave = {this.handleSave}
                        />
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ExerciseList))