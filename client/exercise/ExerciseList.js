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
import {create, read, update} from '../workout/api-workout'
import auth from './../auth/auth-helper'
import Icon from '@material-ui/core/Icon'

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

class ExerciseList extends React.Component {
    state = {
        workout: {name:''},
        editExercise:null, 
        saved: false,
        isNew: false
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
        this.setState({editExercise: []});
    }
    handleReturn = () =>{
        this.props.handleReturn();
    }
    handleChange = name => event => {
        this.setState({workout : Object.assign({},this.state.workout,{[name]: event.target.value})})
    };
    handleExerciseSave = exercise => {
        this.setState({workout : Object.assign({},this.state.workout,{exercises: [...this.state.workout.exercises, exercise]})},
                                ()=>{ this.clickSave()})
    };

    handleExerciseDelete = exerciseId => {
        this.setState({workout : Object.assign({},this.state.workout,
                                {exercises: this.state.workout.exercises.filter((exercise)=>{return exercise._id != exerciseId})})},
                                ()=>{ this.clickSave()})
    };
    clickSave = () => {
        if(this.state.isNew){
            create(this.state.workout).then((data) => {
                if (data.error) {
                  this.setState({error: data.error})
                } else {
                    this.setState({isNew: false, saved: true })
                }
              })
        }else{
            const jwt = auth.isAuthenticated();
            update({
                workoutId: this.state.workout._id
                }, {
                t: jwt.token
                }, this.state.workout).then((data) => {
                if (data.error) {
                    this.setState({error: data.error})
                } else {
                    this.setState({workout: data, saved: true})
                }
            })
        }
      }
      componentWillMount = () =>{
        this.setState({ isNew: this.props.isNew,
                        saved: false,
                        workout : this.props.isNew
                                ? Object.assign({},this.state.workout,{userId:auth.isAuthenticated().user._id,name:''})
                                : this.props.workout
                     })
     }
    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.state.editExercise && 
                    <div>
                        <div className={classes.workoutName}>
                            <TextField
                                id="standard-name"
                                label="Workout Name"
                                className={classes.textField}
                                value={this.state.workout.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        </div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {this.state.workout && this.state.workout.exercises && this.state.workout.exercises.map((exercise,index) => (
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
                                    className={classes.button}>
                                Add Exercise
                            </Button>
                            <Button variant="contained" 
                                onClick={this.clickSave}
                                className={classes.button}>
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
                {this.state.editExercise
                    && <Exercise
                            exercise={this.state.editExercise}
                            handleReturn = {this.handleReturnClick}
                            handleExerciseSave = {this.handleExerciseSave}
                        />
                }
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ExerciseList)