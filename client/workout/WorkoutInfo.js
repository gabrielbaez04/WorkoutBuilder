import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

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
    paddingTop: '50%', // 16:9
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
    [theme.breakpoints.up('md')]: {
        imageContainer:{
            maxWidth: '45%',
            minWidth: '45%',
            float:'left'
        },
        card: {
            display: 'inline',
        },
    },
    leftAligned : {
        textAlign : 'left'
    },
  });

const getWorkoutImages = (images) =>{
    var imagesArr=[];
    images.forEach((image)=>{
        imagesArr.push(image); 
    })
    return imagesArr.length > 3 ? imagesArr.slice(0,3) : imagesArr;
}

const WorkoutInfo = (props) =>{
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardHeader
            title={props.activeStepInfo.name}
            className={classes.cardHeader}
            />
            <div className={classes.imageContainer}>
            {getWorkoutImages(props.activeStepInfo.images).map((image,index)=>{
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
                   {props.activeStepInfo.description}
                </Typography>
                <br></br>
                <Typography className={classes.title} color="textSecondary" className={classes.leftAligned}>
                    {props.activeStepInfo.extra}
                </Typography>
                
                <pre className={classes.leftAligned}>
                    <b>Sets:</b> {props.activeStepInfo.sets}    <b>Repetitions</b>:{props.activeStepInfo.reps}
                </pre>
            </CardContent>
        
        </Card>
    )
}

export default withStyles(styles)(WorkoutInfo)