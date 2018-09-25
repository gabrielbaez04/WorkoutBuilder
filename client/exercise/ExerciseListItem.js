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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import DeleteExercise from './DeleteExercise';

const styles = theme => ({
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        
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
        justifyContent: 'space-around',
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
class ExerciseListItem extends React.Component {
    
    getexerciseImages = () =>{
        var imagesArr=[];
        this.props.exercise.images.forEach((image)=>{
            imagesArr.push(image); 
        })
        return imagesArr.length > 3 ? imagesArr.slice(0,3) : imagesArr;
    }
    
    onEditClick = () =>{
        this.props.handleEditClick(this.props.exercise);
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
                <Card className={classes.card}>
                    <CardHeader
                    title={this.props.exercise.name}
                    className={classes.cardHeader}
                    />
                    <div className={classes.imageContainer} onClick={this.onGoClick}>
                    {this.getexerciseImages().map((image,index)=>{
                        return(<CardMedia
                            key={index}
                            className={classes.cardMedia}
                            image={image}
                            title="exercise title"
                        />)
                    })}
                    </div>
                    <CardContent className={classes.cardContent}>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant="contained" className={classes.button} 
                                style={{backgroundColor:'#ffb25b', color:'white'}}
                                onClick={this.onEditClick}>
                            <EditOutlinedIcon className={classes.icon}/>
                        </Button>
                        <DeleteExercise/>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(ExerciseListItem);