import React from 'react';
import PropTypes from 'prop-types'
import ExerciseInfo from './ExerciseInfo';
import { withStyles } from '@material-ui/core/styles';
import ExerciseForm from './ExerciseForm'
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import SearchBox from '../SearchBox/SearchBox';
import { connect } from 'react-redux'
import { selectExercise, createExercise, updateExercise} from '../../redux/actions/routines';

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginTop: '24px'
      },
    leftAligned : {
        textAlign : 'left'
    },
    [theme.breakpoints.up('sm')]: {
        root: {
          maxWidth: '60%',
        }
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    buttonContainer:{
        display:'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        marginTop: '24px'
    },
    button:{
      backgroundColor:theme.palette.primary.main, 
      color:'white',
    },
});

const mapStateToProps = state => {
    return {
        exercise: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ).workouts.find(workout=>
            workout._id == state.routines.SelectedWorkout
        ).exercises.find(exercise=>
            exercise._id == state.routines.SelectedExercise
        ),
        SelectedExercise : state.routines.SelectedExercise
    }
}

class Exercise extends React.Component {

    state = {
        exercise : [],
        loading: false,
    }
    populateExercise = (suggestion) => {
        //fetching comments
        this.fetchComments(suggestion);
        this.setState({exercise:Object.assign({},this.state.exercise,{...suggestion}), loading:true});
    }

    fetchComments = (suggestion) =>{
        fetch('https://wger.de/api/v2/exercisecomment/?exercise='+suggestion.id)
        .then(response => response.json())
        .then(data =>
        {
            var comments = data.results.map((comment) => {return comment.comment}).join('. ');
            this.setState({exercise:Object.assign({},this.state.exercise,{extra: data.count>0 
                ? comments
                : ''})},()=>{this.fetchImages(suggestion)});
        })
    }

    fetchImages = (suggestion) =>{
        fetch('https://wger.de/api/v2/exerciseimage/?exercise='+suggestion.id)
        .then(response => response.json())
        .then(data => {
            var arrImg = data.count > 0 ? data.results.map((image) => { return image.image}) : [];
            this.setState({exercise:Object.assign({},this.state.exercise,{images: arrImg ? arrImg : []}),loading: false}
            )
        })
    }

    handleReturn = () =>{
        this.props.dispatch(selectExercise(null));
    }
    handleExerciseSave = () =>{
        this.props.SelectedExercise.length == 0
        ?this.props.dispatch(createExercise(this.state.exercise))
        :this.props.dispatch(updateExercise(this.state.exercise))
        this.props.handleExerciseSave(this.state.exercise);   
    }

    handleExerciseDelete = () =>{
        this.props.handleExerciseDelete(this.state.exercise._id);
    }

    handleNumberChange = (name) => event => {
        this.setState({
            exercise: Object.assign({},this.state.exercise,{[name]: event.target.value > 3 ? event.target.value.slice(0,3): event.target.value})
        });
    };

    componentWillMount(){
        this.setState({exercise: this.props.exercise ? this.props.exercise : []})
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <SearchBox populateExercise={this.populateExercise}/>
                <ExerciseInfo
                    activeStepInfo={this.state.exercise}
                />
                <ExerciseForm activeStepInfo={this.state.exercise}
                              handleNumberChange={this.handleNumberChange}/>
                <div className={classes.buttonContainer}>
                    <Button size="small" onClick={this.handleReturn}>
                        <KeyboardReturn />
                        Return
                    </Button>
                    <Button variant="contained" 
                            onClick={this.handleExerciseSave}
                            className={classes.button}
                            disabled={this.state.loading || this.state.exercise.length == 0}>
                        Save
                    </Button>
                </div>
            </div>
        );
    }
}
Exercise.propTypes = {
    SelectedExercise: PropTypes.any.isRequired,
    exercise: PropTypes.object,
    handleExerciseSave: PropTypes.func.isRequired,
    classes: PropTypes.any.isRequired,
    theme: PropTypes.any.isRequired
}
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Exercise));