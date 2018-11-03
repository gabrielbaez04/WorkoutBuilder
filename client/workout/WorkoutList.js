import React from 'react';
import Workout from './Workout';
import ExerciseList from '../exercise/ExerciseList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import auth from './../auth/auth-helper'
import WorkoutListItem from './WorkoutListItem';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import {selectRoutine, selectWorkout, updateRoutine, createRoutine, updateRoutineName} from '../../redux/actions/routines'
import { update ,create } from '../routine/api-routine'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon'

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
    routineName:{
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
        routine: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ),
        SelectedRoutine : state.routines.SelectedRoutine,
        SelectedWorkout : state.routines.SelectedWorkout,
    }
}

class WorkoutList extends React.Component {
    state = {
        error: '',
        saved: false,
        run: false,
        name: this.props.routine ? this.props.routine.name : ''
    }

    handleGoClick = (workoutId) =>{
        this.setState({run: true});
        this.props.dispatch(selectWorkout(workoutId));
    }
    handleAddClick = () =>{
        this.props.dispatch(selectWorkout([]));
        this.setState({saved: false}); 
    }
    handleReturn = () =>{
        this.props.dispatch(selectWorkout(null));   
        this.setState({run: false});     
    }
    handleBack = () =>{
        this.props.dispatch(selectRoutine(null));
    }
    handleSaveClick = () =>{
        this.props.SelectedRoutine.length > 0
        && this.props.dispatch(updateRoutineName(this.state.name));     
        this.handleSave();
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    };
    
    handleSave = () => {
        const jwt = auth.isAuthenticated();
        if(this.props.SelectedRoutine.length > 0){
            update({
                routineId: this.props.routine._id
                }, {
                t: jwt.token
                }, this.props.routine).then((data) => {
                if (data.error) {
                    this.setState({error: data.error})
                } else {
                    this.setState({saved: true})
                    this.props.dispatch(updateRoutine(data)); 
                }
            })
        }
        else{
            create({name:this.state.name, userId: jwt.user._id}).then((data) => {
                if (data.error) {
                    this.setState({error: data.error})
                } else {
                    this.setState({saved: true}) 
                    this.props.dispatch(createRoutine(data))
                    if(this.props.SelectedRoutine.length == 0){
                        this.props.dispatch(selectRoutine(data._id));
                    }                 
                }
            })
        }

    };

    render() {
        const {classes, routine} = this.props
        return (
            <div>
                {!this.props.SelectedWorkout && 
                    <div>
                        <div className={classes.routineName}>
                            <TextField
                                id="standard-name"
                                label="Routine Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        </div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {routine && routine.workouts && routine.workouts.map(workout => (
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
                            <Button variant="contained" 
                                    onClick={this.handleAddClick}
                                    className={classes.button}
                                    disabled={this.props.SelectedRoutine.length == 0}>
                                Add Workout
                            </Button>
                            <Button variant="contained" 
                                onClick={this.handleSaveClick}
                                className={classes.button}
                                disabled={this.state.name == ""}>
                                Save
                            </Button>
                        </div>
                        {this.state.saved && (
                            <div className={classes.savedMessage}>
                            <Typography component="p" color="primary">
                                <Icon color="primary" className={classes.saved}>check_circle</Icon>
                                    Routine Saved!
                                </Typography>
                            </div>)
                        }
                    </div>
                }
                 
                {this.state.run && this.props.SelectedWorkout 
                    && <Workout 
                            handleReturn = {this.handleReturn}
                        />
                }
                {!this.state.run && this.props.SelectedWorkout 
                    && <ExerciseList/>
                }
            </div>
        );
    }
}
WorkoutList.propTypes = {
    SelectedWorkout: PropTypes.any,
    SelectedRoutine: PropTypes.any.isRequired,
    workout: PropTypes.object,
    classes: PropTypes.any.isRequired,
}
export default connect(mapStateToProps)(withStyles(styles)(WorkoutList));
