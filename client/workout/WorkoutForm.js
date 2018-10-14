import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'

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

const WorkoutForm = (props) =>{
    const { classes, activeStepInfo } = props;
    return(
        <Paper>
            <form className={classes.form} noValidate autoComplete="off">
                <div>
                <TextField
                    id="outlined-read-only-input"
                    label="Last Reps"
                    value={activeStepInfo.previousRepetitions && activeStepInfo.previousRepetitions.length > 0 ? 
                                    activeStepInfo.previousRepetitions[activeStepInfo.previousRepetitions.length-1]
                                    : ''
                                }
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
                    value={activeStepInfo.currentRepetitions || ''}
                    onChange={props.handleNumberChange('currentRepetitions')}
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
                    label="Last Weight"
                    value={activeStepInfo.previousWeights && activeStepInfo.previousWeights.length > 0 ? 
                        activeStepInfo.previousWeights[activeStepInfo.previousWeights.length-1]
                        : ''
                    }
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
                    value={activeStepInfo.currentWeight || ''}
                    onChange={props.handleNumberChange('currentWeight')}
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

WorkoutForm.propTypes = {
    classes: PropTypes.any.isRequired,
    activeStepInfo: PropTypes.object.isRequired
  }

export default withStyles(styles)(WorkoutForm);