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
    },
  });

class ExerciseList extends React.Component {
    state = {
        selectedExercise: null,
        editExercise:null, 
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
    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.state.editExercise && 
                    <div>
                        <Typography variant="display1" className={classes.leftAligned}
                                    style={{textAlign: 'center'}}>
                            {this.props.workout.name}
                        </Typography>
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
                                    onClick={this.handleAddClick}
                                    className={classes.button}>
                                Add Exercise
                            </Button>
                        </div>
                    </div>
                    
                }
                {this.state.editExercise
                    && <Exercise
                            exercise={this.state.editExercise}
                            handleReturn = {this.handleReturnClick}
                        />
                }
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ExerciseList)