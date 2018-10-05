import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import {muscles} from '../assets/js/muscles-data'
import front from '../assets/images/muscles/muscular_system_front.svg';
import back from '../assets/images/muscles/muscular_system_back.svg';
import ExerciseMuscles from './ExerciseMuscles';

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'left',
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginTop: theme.spacing.unit
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
        backgroundSize:100,
        width:'50%'
    },
    cardContent: {
        flexGrow: 1,
        padding: `0px ${theme.spacing.unit}px`,
        textAlign: 'left'
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
        justifyContent:'center',
        height: '200px'
    },
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
    [theme.breakpoints.up('md')]: {
        imageContainer:{
            maxWidth: '35%',
            minWidth: '35%',
            float:'left'
        },
        card: {
            display: 'inline',
        },
        leftAligned : {
            textAlign : 'left'
        },
        cardContent: {
            height: '250px'
        },
        root: {
            textAlign: 'center',
        }
    },
  
  });


const getExerciseImages = (activeStepimages) =>{
    var imagesArr=[];
    activeStepimages.forEach((image)=>{
        imagesArr.push(image); 
    })
    return imagesArr.length > 2 ? imagesArr.slice(0,2) : imagesArr;
}

const stripHTMLTags = (value) =>{
    if(value) return value.replace(/<[^>]*>/g,'')
}

const ExerciseInfo = (props) =>{
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardHeader
            title={props.activeStepInfo.name}
            className={classes.cardHeader}
            />
            <div className={classes.imageContainer}>
            {props.activeStepInfo.images && props.activeStepInfo.images.length == 0 &&
                <ExerciseMuscles exercise={props.activeStepInfo}/>
            }
            {props.activeStepInfo.images && props.activeStepInfo.images.length > 0 && getExerciseImages(props.activeStepInfo.images).map((image,index)=>{
                return(<CardMedia
                    key={index}
                    className={classes.cardMedia}
                    image={image}
                    title={"exercise "+index}
                />)
            })}
            </div>
            <CardContent className={classes.cardContent}>
                <Typography variant="subheading" className={classes.leftAligned}>
                   {stripHTMLTags(props.activeStepInfo.description)}
                </Typography>
                <Typography className={classes.title} color="textSecondary" className={classes.leftAligned}>
                    {props.activeStepInfo.extra && <br/>}
                    {stripHTMLTags(props.activeStepInfo.extra)}
                </Typography>
                <br/>
                {props.isWorkout && 
                <Typography variant="title" className={classes.leftAligned}>
                   Sets:  {props.activeStepInfo.sets}  &emsp;
                   Repetitions:{props.activeStepInfo.repetitions}
                </Typography>
                }
            </CardContent>
        
        </Card>
    )
}

export default withStyles(styles)(ExerciseInfo)