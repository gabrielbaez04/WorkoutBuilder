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

const ExerciseForm = (props) => {
    const { classes, activeStepInfo } = props;
    return(
        <Paper>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    id="outlined-number"
                    label="Sets"
                    value={props.activeStepInfo.sets || ''}
                    onChange={props.handleNumberChange('sets')}
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
                    value={props.activeStepInfo.repetitions || ''}
                    onChange={props.handleNumberChange('repetitions')}
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
ExerciseForm.propTypes = {
    classes: PropTypes.any.isRequired,
    handleNumberChange: PropTypes.func.isRequired,
    activeStepInfo: PropTypes.any.isRequired
  }
export default withStyles(styles)(ExerciseForm);