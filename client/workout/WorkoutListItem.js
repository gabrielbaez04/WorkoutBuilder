import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

const styles = theme => ({
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
      button:{
          borderRadius:'50%'
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
          display:'flex',
          justifyContent:'center'
      }

  });
class WorkoutListItem extends React.Component {
    getWorkoutImages(){
        var images=[];
        this.props.workout.exercises.forEach((exercise)=>{
            exercise.images.forEach((image)=>{
                images.push(image); 
            })          
        })
        return images.length > 3 ? images.slice(0,3) : images;
    }
    onGoClick = () =>{
        this.props.handleGoClick(this.props.workout);
    }
    onEditClick = () =>{
        this.props.handleEditClick(this.props.workout);
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
                <Card className={classes.card}>
                    <CardHeader
                    title={this.props.workout.name}
                    className={classes.cardHeader}
                    />
                    <div className={classes.imageContainer} onClick={this.onGoClick}>
                    {this.getWorkoutImages().map((image,index)=>{
                        return(<CardMedia
                            key={index}
                            className={classes.cardMedia}
                            image={image}
                            title="workout title"
                        />)
                    })}
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="headline" component="h2">
                        {this.props.workout.exercises ? this.props.workout.exercises.length : 0} Exercises
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant="contained" className={classes.button} 
                                style={{backgroundColor:'#ffb25b', color:'white'}}
                                onClick={this.onEditClick}>
                            <EditOutlinedIcon className={classes.icon}/>
                        </Button>
                        <Button variant="contained" className={classes.button} 
                                style={{backgroundColor:'#de0025', color:'white'}}>
                            <DeleteOutlinedIcon className={classes.icon}/>
                        </Button>
                        <Button variant="contained" className={classes.button} 
                                style={{backgroundColor:'#398500', color:'white'}}
                                onClick={this.onGoClick}>
                            <NavigateNextOutlinedIcon className={classes.icon}/>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(WorkoutListItem);