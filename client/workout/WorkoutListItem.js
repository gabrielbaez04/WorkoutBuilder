import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import DeleteWorkout from './DeleteWorkout';
import ExerciseMuscles from '../exercise/ExerciseMuscles';
import {selectWorkout, deleteWorkout} from '../../redux/actions/routines'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = theme => ({
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
        
      },
      cardMedia: {
        backgroundSize:75,
        width:'25%'
    },
    cardContent: {
        flexGrow: 1,
        padding: `0px ${theme.spacing.unit}px`
    },
    cardHeader:{
        padding: `${theme.spacing.unit}px`,
    },
    cardActions:{
        display: 'flex',
        padding: 0,
    },
    button:{
        width: '100%',
        backgroundColor:'rgb(234, 234, 234)', 
        color:'rgb(130, 124, 124)',
        padding: 0,
        borderRadius: 0,
        margin:0,
        boxShadow:'none'
    },
    icon:{
        height: '1.2em',
        width: '1.2em'
    },
    gridItem:{
        width: '100%'
    },
    justify:{
        justifyContent: 'center'
    },
    imageContainer:{
        maxWidth: '100%',
        display:'flex',
        justifyContent:'center',
        height: '200px'
    },
    bodyMusclesContainer:{
        maxWidth: '50%',
        minWidth: '50%',
    },
    subtitle:{
        color:'grey'
    }
  });
const WorkoutListItem = (props) => {
    const onGoClick = () =>{
        props.handleGoClick(props.workout._id);
    }
    const onEditClick = () =>{
        props.dispatch(selectWorkout(props.workout._id));
    }
    const onDeleteClick = () =>{
        props.dispatch(deleteWorkout(props.workout._id))
        props.handleSave();   
    }

    const {classes} = props;
    return (
        <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
            <Card className={classes.card}>
                <CardHeader
                title={props.workout.name}
                className={classes.cardHeader}
                onClick={onEditClick}
                />
                <div className={classes.imageContainer} onClick={onEditClick}>
                {props.workout.exercises.map((exercise,index)=>{
                    if(index==2) return;
                        return(
                        <div
                            key={index}
                            className={classes.bodyMusclesContainer}>
                            <ExerciseMuscles
                                exercise={exercise}
                                title="workout title"
                            />
                        </div>
                        )
                    })          
                }
                </div>
                <CardContent className={classes.cardContent}
                    onClick={onEditClick}>
                    <Typography gutterBottom variant="headline" component="h2" className={classes.subtitle}>
                    {props.workout.exercises ? props.workout.exercises.length : 0} Exercises
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="contained" className={classes.button} 
                            onClick={onEditClick}>
                        <EditOutlinedIcon className={classes.icon}/>
                    </Button>
                    <DeleteWorkout workoutId={props.workout._id}
                                    handleWorkoutDelete = {onDeleteClick}/>
                    {props.workout.exercises.length > 0 && 
                        <Button variant="contained" className={classes.button} 
                                onClick={onGoClick}>
                            <NavigateNextOutlinedIcon className={classes.icon}/>
                        </Button>
                    }
                    
                </CardActions>
            </Card>
        </Grid>
    );
    
}
WorkoutListItem.propTypes = {
    workout: PropTypes.object.isRequired,
}
export default connect()(withStyles(styles)(WorkoutListItem));