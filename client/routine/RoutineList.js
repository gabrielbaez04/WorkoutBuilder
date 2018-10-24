import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import RoutineListItem from './RoutineListItem';
import WorkoutList from '../workout/WorkoutList';
import auth from '../auth/auth-helper';
import { requestRoutines, selectRoutine } from '../../redux/actions/routines';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  justify: {
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },

});
const mapStateToProps = state => ({
  routines: state.routines.data,
  SelectedRoutine: state.routines.SelectedRoutine,
});

class RoutineList extends React.Component {
    state = {
      error: '',
      saved: false,
    }

    handleAddClick = () => {
      const { dispatch } = this.props;
      dispatch(selectRoutine([]));
    }

    handleReturnClick = () => {
      this.fetchRoutines();
    }

    fetchRoutines = () => {
      const { dispatch } = this.props;
      const jwt = auth.isAuthenticated();
      dispatch(requestRoutines(jwt.user._id, jwt.token));
    }

    componentDidMount = () => {
      this.fetchRoutines();
    }

    render() {
      const { classes, routines, SelectedRoutine } = this.props;
      return (
        <div>
          {!SelectedRoutine
                    && (
                    <div>
                      <div className={classNames(classes.layout, classes.cardGrid)}>
                        <Grid container spacing={40} className={classes.justify}>
                          {routines.map(routine => (
                            <RoutineListItem
                              key={routine._id}
                              routine={routine}
                            />
                          ))}
                        </Grid>
                      </div>
                      <div className={classes.buttonContainer}>
                        <Button
                          variant="contained"
                          className={classes.button}
                          onClick={this.handleAddClick}
                        >
                                Add Routine
                        </Button>
                      </div>
                    </div>
                    )
                }
          {SelectedRoutine
                    && (
                    <WorkoutList
                      handleReturn={this.handleReturnClick}
                    />
                    )
                }
        </div>
      );
    }
}
RoutineList.propTypes = {
  SelectedRoutine: PropTypes.any,
  routines: PropTypes.object,
  classes: PropTypes.any.isRequired,
  dispatch: PropTypes.object.isRequired,
};
RoutineList.defaultProps = {
  SelectedRoutine: null,
  routines: {},
};
export default connect(mapStateToProps)(withStyles(styles)(RoutineList));
