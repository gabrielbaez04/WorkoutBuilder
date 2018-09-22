import React from 'react';
import PreviewContainer from './PreviewContainer';
import Workout from './Workout';
import ExerciseList from './ExerciseList';
import PropTypes from 'prop-types';
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
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

import data from './data'

const styles = theme => ({
    workoutsContainer: {
        display: 'flex',
        justifyContent: 'center',
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
      },
      cardGrid: {
        padding: `${theme.spacing.unit * 3}px 0`,
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
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
        height: '1.5em',
        width: '1.5em'
      },
      gridItem:{
        width: '100%'
      },
      justify:{
        justifyContent: 'center'
      }

  });

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        editWorkout:null,
        workouts : data.workoutsData()   
    }
    handleWorkoutClick = (workout) =>{
        this.setState({selectedWorkout: workout});
    }
    handleBackClick = () =>{
        this.setState({selectedWorkout: null, editWorkout:null});
    }
    handleWorkoutEdit = (workout) =>{
        this.setState({editWorkout: workout});
    }
    render() {
        const {classes} = this.props
        return (
            <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40} className={classes.justify}>
                    {this.state.workouts.map(workout => (
                    <Grid item key={workout.id} sm={6} md={4} lg={3} className={classes.gridItem}>
                        <Card className={classes.card}>
                        <CardHeader
                            title={workout.name}
                            className={classes.cardHeader}
                            />
                            <CardMedia
                                className={classes.cardMedia}
                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="headline" component="h2">
                                {workout.exercises ? workout.exercises.length : 0} Exercises
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="contained" className={classes.button} 
                                        style={{backgroundColor:'#ffb25b', color:'white'}}>
                                    <EditOutlinedIcon className={classes.icon}/>
                                </Button>
                                <Button variant="contained" className={classes.button} 
                                        style={{backgroundColor:'#de0025', color:'white'}}>
                                    <DeleteOutlinedIcon className={classes.icon}/>
                                </Button>
                                <Button variant="contained" className={classes.button} 
                                        style={{backgroundColor:'#398500', color:'white'}}>
                                    <NavigateNextOutlinedIcon className={classes.icon}/>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
            </main>
        );
    }
}
export default withStyles(styles)(WorkoutList)
/*
{!this.state.selectedWorkout && !this.state.editWorkout &&
                    <div>
                        <h2 className="ui center aligned icon header">
                        <i className="circular hand rock icon"></i>
                        Workout List
                        </h2>
                        <div className='ui segment compact workoutsContainer'>
                            {this.state.workouts.map((workout,index)=>{
                                return (<PreviewContainer
                                    key = {workout.id}
                                    name={workout.name}
                                    isWorkout="true"
                                    data={workout}
                                    handleWorkoutClick={this.handleWorkoutClick}
                                    handleEdit={this.handleWorkoutEdit}
                                />)
                            })}
                        </div>
                        <button className="ui button blue fluid addButton">
                            <i className="plus alternate icon big link"></i>
                        </button>
                    </div>
                }
                {this.state.selectedWorkout 
                    && <Workout 
                            exercises={this.state.selectedWorkout.exercises}
                            handleBackClick={this.handleBackClick}
                        />
                }
                {this.state.editWorkout 
                    && <ExerciseList
                            exercises={this.state.editWorkout.exercises}
                            handleBackClick={this.handleBackClick}
                        />
                }
*/