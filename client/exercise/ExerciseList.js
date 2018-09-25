import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExerciseListItem from './ExerciseListItem';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

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
          marginBottom: '10px'
      }

  });

class ExerciseList extends React.Component {
    state = {
        selectedExercise: null,
        editExercise:null, 
    }
    handleGoClick = (Exercise) =>{
        this.setState({selectedExercise: Exercise});
    }
    handleBackClick = () =>{
        this.setState({selectedExercise: null, editExercise:null});
    }
    handleEditClick = (Exercise) =>{
        this.setState({editExercise: Exercise});
    }
    handleReturn = () =>{
        this.props.handleReturn();
    }
    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.state.selectedExercise && !this.state.editExercise && 
                    <div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {this.props.workout.exercises && this.props.workout.exercises.map((exercise,index) => (
                                    <ExerciseListItem
                                        key={index} 
                                        exercise={exercise}
                                        handleGoClick={this.handleGoClick}
                                        handleEditClick={this.handleEditClick}/>
                                ))}
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button size="small" onClick={this.handleReturn}>
                                <KeyboardReturn />
                                Return
                            </Button>
                            <Button variant="contained" 
                                    style={{backgroundColor:'#333', color:'white'}}
                                    onClick={this.onEditClick}>
                                Add Exercise
                            </Button>
                        </div>
                    </div>
                    
                }
                {false && this.state.selectedExercise 
                    && <Exercise 
                            Exercise={this.state.selectedExercise}
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturnClick}
                        />
                }
            </div>
        );
    }
}

export default withStyles(styles)(ExerciseList)