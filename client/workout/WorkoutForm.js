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

class WorkoutForm extends React.Component{
    state = {
        weight:'',
        repetitions:''
      }; 

    handleNumberChange = name => event => {
        this.setState({
        [name]: event.target.value > 3 ? event.target.value.slice(0,3): event.target.value,
        });
    };
    
    render(){
        const { classes, activeStepInfo } = this.props;
    
        return(
            <Paper>
                <form className={classes.form} noValidate autoComplete="off">
                    <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Reps"
                        defaultValue={activeStepInfo.prevReps}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                            }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Repetitions"
                        value={this.state.repetitions}
                        onChange={this.handleNumberChange('repetitions')}
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
                    </div>
                    <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Weigth"
                        defaultValue={activeStepInfo.prevWeight}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                            }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Weight"
                        value={this.state.weight}
                        onChange={this.handleNumberChange('weight')}
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
                    </div>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(WorkoutForm);