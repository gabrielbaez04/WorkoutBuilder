import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { connect } from 'react-redux';
import DeleteExercise from './DeleteExercise';
import ExerciseMuscles from './ExerciseMuscles';
import { selectExercise, deleteExercise } from '../../redux/actions/routines';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardMedia: {
    backgroundSize: 100,
    width: '50%',
  },
  cardHeader: {
    padding: `${theme.spacing.unit}px`,
  },
  cardActions: {
    display: 'flex',
    padding: 0,
  },
  button: {
    width: '100%',
    backgroundColor: 'rgb(234, 234, 234)',
    color: 'rgb(130, 124, 124)',
    padding: 0,
    borderRadius: 0,
    margin: 0,
    boxShadow: 'none',
  },
  icon: {
    height: '1.2em',
    width: '1.2em',
  },
  gridItem: {
    width: '100%',
  },
  imageContainer: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '200px',
  },
});
const ExerciseListItem = (props) => {
  const getexerciseImages = () => {
    const imagesArr = [];
    props.exercise.images.forEach((image) => {
      imagesArr.push(image);
    });
    return imagesArr.length > 3 ? imagesArr.slice(0, 3) : imagesArr;
  };
  const onEditClick = () => {
    props.dispatch(selectExercise(props.exercise._id));
  };
  const handleExerciseDelete = () => {
    props.dispatch(deleteExercise(props.exercise._id));
    props.handleSave();
  };
  const { classes, exercise } = props;
  const exerciseImages = getexerciseImages();

  return (
    <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
      <Card className={classes.card}>
        <CardHeader
          title={exercise.name}
          className={classes.cardHeader}
          onClick={onEditClick}
        />
        <div className={classes.imageContainer} onClick={onEditClick}>
          {exerciseImages.length > 0

            ? exerciseImages.map((image, index) => (
              <CardMedia
                key={index} /* eslint-disable-line react/no-array-index-key */
                className={classes.cardMedia}
                image={image}
                title="exercise title"
              />
            ))
            : <ExerciseMuscles exercise={exercise} />
            }
        </div>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={onEditClick}
          >
            <EditOutlinedIcon className={classes.icon} />
          </Button>
          <DeleteExercise handleExerciseDelete={handleExerciseDelete} />
        </CardActions>
      </Card>
    </Grid>
  );
};
ExerciseListItem.propTypes = {
  exercise: PropTypes.object.isRequired,
  classes: PropTypes.any.isRequired,
  handleSave: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect()(withStyles(styles)(ExerciseListItem));
