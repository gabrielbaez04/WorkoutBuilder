import React from 'react';
import ExerciseInfo from './ExerciseInfo';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ExerciseForm from './ExerciseForm'
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import SearchBox from '../SearchBox/SearchBox';

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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


class Exercise extends React.Component {

    state = {
        exercise : null
    }

    handleReturn = () =>{
        this.props.handleReturn();
    }

    componentWillMount(){
        this.setState({exercise: this.props.exercise})
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <SearchBox/>
                <ExerciseInfo
                    activeStepInfo={this.state.exercise}
                />
                <ExerciseForm activeStepInfo={this.state.exercise}/>
                <div className={classes.buttonContainer}>
                    <Button size="small" onClick={this.handleReturn}>
                        <KeyboardReturn />
                        Return
                    </Button>
                    <Button variant="contained" 
                            onClick={this.onEditClick}
                            className={classes.button}>
                        Save
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Exercise);