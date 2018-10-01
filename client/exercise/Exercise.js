import React from 'react';
import ExerciseInfo from './ExerciseInfo';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import ExerciseForm from './ExerciseForm'
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import SearchBox from '../SearchBox/SearchBox';
import front from '../assets/images/128px-Muscular_system.svg.png';
import back from '../assets/images/128px-Muscular_system-back.svg.png';

const styles = theme => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginTop: theme.spacing.unit
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

const defaultImages = [front, back];

class Exercise extends React.Component {

    state = {
        exercise : []
    }
    populateExercise = (suggestion) => {
        //fetching comments
        this.fetchComments(suggestion);
        this.setState({exercise:Object.assign({},this.state.exercise,{...suggestion})});
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
            this.setState({exercise:Object.assign({},this.state.exercise,{images: data.count>0 
                ? arrImg
                : defaultImages})}
            )
        })
    }

    handleReturn = () =>{
        this.props.handleReturn();
    }
    handleExerciseSave = () =>{
        this.props.handleExerciseSave(this.state.exercise);
        this.props.handleReturn();
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
        this.setState({exercise: this.props.exercise})
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
                            className={classes.button}>
                        Save
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Exercise);