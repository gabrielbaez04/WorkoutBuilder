import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import ExerciseMuscles from './ExerciseMuscles';

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardMedia: {
    backgroundSize: 100,
    width: '50%',
  },
  cardContent: {
    flexGrow: 1,
    padding: `0px ${theme.spacing.unit}px`,
    textAlign: 'left',
  },
  cardHeader: {
    padding: `${theme.spacing.unit}px`,
  },
  imageContainer: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '200px',
  },
  [theme.breakpoints.up('md')]: {
    imageContainer: {
      maxWidth: '35%',
      minWidth: '35%',
      float: 'left',
    },
    card: {
      display: 'inline',
    },
    leftAligned: {
      textAlign: 'left',
    },
    cardContent: {
      height: '250px',
    },
  },
});

const getExerciseImages = (activeStepimages) => {
  const imagesArr = [];
  activeStepimages.forEach((image) => {
    imagesArr.push(image);
  });
  return imagesArr.length > 2 ? imagesArr.slice(0, 2) : imagesArr;
};

const stripHTMLTags = value => (value ? value.replace(/<[^>]*>/g, '') : '');

const ExerciseInfo = (props) => {
  const { classes, activeStepInfo, isWorkout } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        title={activeStepInfo.name}
        className={classes.cardHeader}
      />
      <div className={classes.imageContainer}>
        {activeStepInfo.images && activeStepInfo.images.length === 0
                && <ExerciseMuscles exercise={activeStepInfo} />
            }
        {activeStepInfo.images && activeStepInfo.images.length > 0
          && getExerciseImages(activeStepInfo.images).map((image, index) => (
            <CardMedia
              key={index}
              className={classes.cardMedia}
              image={image}
              title={`exercise ${index}`}
            />
          ))}
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="subheading" className={classes.leftAligned}>
          {stripHTMLTags(activeStepInfo.description)}
        </Typography>
        <Typography className={classes.title} color="textSecondary" className={classes.leftAligned}>
          {activeStepInfo.extra && <br />}
          {stripHTMLTags(activeStepInfo.extra)}
        </Typography>
        <br />
        {isWorkout
                && (
                <Typography variant="title" className={classes.leftAligned}>
                  {activeStepInfo.sets && `Sets: ${activeStepInfo.sets}`}
                  &emsp;
                  {activeStepInfo.repetitions && `Repetitions: ${activeStepInfo.repetitions}`}
                </Typography>
                )
                }
      </CardContent>

    </Card>
  );
};
ExerciseInfo.propTypes = {
  classes: PropTypes.any.isRequired,
  activeStepInfo: PropTypes.any.isRequired,
  isWorkout: PropTypes.bool,
};
export default withStyles(styles)(ExerciseInfo);
