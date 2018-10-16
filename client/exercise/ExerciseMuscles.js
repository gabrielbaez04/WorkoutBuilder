import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {muscles} from '../assets/js/muscles-data'
import front from '../assets/images/muscles/muscular_system_front.svg';
import back from '../assets/images/muscles/muscular_system_back.svg';

const styles = theme => ({
    bodyMusclesContainer:{
        maxWidth: '100%',
        minWidth: '100%',
        display:'flex',
        justifyContent:'center',
        height: '200px'
    },
    bodyMusclesImage:{
        backgroundSize:100,
        width:'50%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '50%'
    },
  
  });

const defaultImages = [front, back];

const getDefaulImages = (exercise) =>{
    let primaryMuscles = exercise.muscles;
    let secondaryMuscles = exercise.muscles_secondary;
    let musclesImages = {
        primaryMuscles:[],
        secondaryMuscles:[]
    };
    if(primaryMuscles.length == 0 && secondaryMuscles.length == 0)
    {
        return defaultImages;
    }
    primaryMuscles.forEach((muscle)=>{
        musclesImages.primaryMuscles.push(muscle)
    });
    secondaryMuscles.forEach((muscle)=>{
        musclesImages.secondaryMuscles.push(muscle)
    });
    return musclesImages;
}

const getMuscles = (musclesImages) =>{
    let frontMuscles = [];
    let backMuscles = [];
    musclesImages.primaryMuscles && musclesImages.primaryMuscles.map((muscle)=>{
        muscles[muscle].isFront
        ?frontMuscles.push('url("/assets/images/muscles/main/muscle-'+muscle+'.svg")')
        :backMuscles.push('url("/assets/images/muscles/main/muscle-'+muscle+'.svg")')     
    });
    musclesImages.secondaryMuscles && musclesImages.secondaryMuscles.map((muscle)=>{
        muscles[muscle].isFront
        ?frontMuscles.push('url("/assets/images/muscles/secondary/muscle-'+muscle+'.svg")')
        : backMuscles.push('url("/assets/images/muscles/secondary/muscle-'+muscle+'.svg")')
    });
    frontMuscles.push('url("/assets/images/muscles/muscular_system_front.svg');
    backMuscles.push('url("/assets/images/muscles/muscular_system_back.svg');
    
    let bodyMuscles = {
        frontMuscles,
        backMuscles
    }
    return bodyMuscles;
}

const ExerciseMuscles = (props) =>{
    const { classes } = props;
    const bodyMuscles = getMuscles(getDefaulImages(props.exercise));
    return(
        <div className={classes.bodyMusclesContainer}>
            <div
                className={classes.bodyMusclesImage} 
                style={{backgroundImage:bodyMuscles.frontMuscles.join()}}>
            </div>
            <div
                className={classes.bodyMusclesImage} 
                style={{backgroundImage:bodyMuscles.backMuscles.join()}}>
            </div>
        </div>
    )
}
ExerciseMuscles.propTypes = {
    exercise: PropTypes.object.isRequired,
    classes: PropTypes.any.isRequired
}
export default withStyles(styles)(ExerciseMuscles);