import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 130,
    },
    form:{
        display: 'inline-flex'
    },
  });

class ExerciseForm extends React.Component{
    
    render(){
        const { classes, activeStepInfo } = this.props;
    
        return(
            <Paper>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="outlined-number"
                        label="Sets"
                        value={this.props.activeStepInfo.sets || ''}
                        onChange={this.props.handleNumberChange('sets')}
                        type="number"
                        className={classes.textField}
                        inputProps={{
                            min: "0", 
                            max: "999"
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Repetitions"
                        value={this.props.activeStepInfo.repetitions || ''}
                        onChange={this.props.handleNumberChange('repetitions')}
                        type="number"
                        className={classes.textField}
                        inputProps={{
                            min: "0", 
                            max: "999"
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(ExerciseForm);