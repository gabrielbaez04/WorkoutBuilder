import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteRoutine from './DeleteRoutine';
import {selectRoutine} from '../../redux/actions/routines'
import { connect } from 'react-redux'

const styles = theme => ({
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
        
      },
      cardContent: {
        flexGrow: 1,
        padding: `0px ${theme.spacing.unit}px`
      },
      cardHeader:{
        padding: `${theme.spacing.unit}px`,
      },
      cardActions:{
        display: 'flex',
        padding: 0,
      },
      button:{
          width: '100%',
          backgroundColor:'rgb(234, 234, 234)', 
          color:'rgb(130, 124, 124)',
          padding: 0,
          borderRadius: 0,
          margin:0,
          boxShadow:'none'
      },
      icon:{
        height: '1.2em',
        width: '1.2em'
      },
      gridItem:{
        width: '100%'
      },
    subtitle:{
        color:'grey'
    }
  });
const WorkoutListItem = (props) => {

    const onEditClick = () =>{
        props.dispatch(selectRoutine(props.routine._id));
    }
    const {classes} = props;
    return (
        <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
            <Card className={classes.card}>
                <CardHeader
                title={props.routine.name}
                className={classes.cardHeader}
                onClick={onEditClick}
                />

                <CardContent 
                    className={classes.cardContent}
                    onClick={onEditClick}>
                    <Typography gutterBottom variant="headline" component="h2" className={classes.subtitle}>
                    {props.routine.workouts ? props.routine.workouts.length : 0} Workouts
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="contained" className={classes.button} 
                            onClick={onEditClick}>
                        <EditOutlinedIcon className={classes.icon}/>
                    </Button>
                    <DeleteRoutine RoutineId={props.routine._id}/>
                </CardActions>
            </Card>
        </Grid>
    );
}
WorkoutListItem.propTypes = {
    workout: PropTypes.object,
    classes: PropTypes.any.isRequired,
}
export default connect()(withStyles(styles)(WorkoutListItem));