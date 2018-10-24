import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import musclesData from '../assets/js/muscles-data';
import front from '../assets/images/muscles/muscular_system_front.svg';
import back from '../assets/images/muscles/muscular_system_back.svg';

const styles = () => ({
  bodyMusclesContainer: {
    maxWidth: '100%',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '200px',
  },
  bodyMusclesImage: {
    backgroundSize: 100,
    width: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '50%',
  },

});

const defaultImages = [front, back];

const getDefaulImages = (exercise) => {
  const primaryMuscles = exercise.muscles;
  const secondaryMuscles = exercise.muscles_secondary;
  const musclesImages = {
    primaryMuscles: [],
    secondaryMuscles: [],
  };
  if (primaryMuscles.length === 0 && secondaryMuscles.length === 0) {
    return defaultImages;
  }
  primaryMuscles.forEach((muscle) => {
    musclesImages.primaryMuscles.push(muscle);
  });
  secondaryMuscles.forEach((muscle) => {
    musclesImages.secondaryMuscles.push(muscle);
  });
  return musclesImages;
};

const getMuscles = (musclesImages) => {
  const frontMuscles = [];
  const backMuscles = [];
  const { primaryMuscles = [], secondaryMuscles = [] } = musclesImages || {};
  primaryMuscles.map(muscle => (musclesData.muscles[muscle].isFront
    ? frontMuscles.push(`url("/assets/images/muscles/main/muscle-${muscle}.svg")`)
    : backMuscles.push(`url("/assets/images/muscles/main/muscle-${muscle}.svg")`)));
  secondaryMuscles.map(muscle => (musclesData.muscles[muscle].isFront
    ? frontMuscles.push(`url("/assets/images/muscles/secondary/muscle-${muscle}.svg")`)
    : backMuscles.push(`url("/assets/images/muscles/secondary/muscle-${muscle}.svg")`)));
  frontMuscles.push('url("/assets/images/muscles/muscular_system_front.svg');
  backMuscles.push('url("/assets/images/muscles/muscular_system_back.svg');

  const bodyMuscles = {
    frontMuscles,
    backMuscles,
  };
  return bodyMuscles;
};

const ExerciseMuscles = (props) => {
  const { classes, exercise } = props;
  const bodyMuscles = getMuscles(getDefaulImages(exercise));
  return (
    <div className={classes.bodyMusclesContainer}>
      <div
        className={classes.bodyMusclesImage}
        style={{ backgroundImage: bodyMuscles.frontMuscles.join() }}
      />
      <div
        className={classes.bodyMusclesImage}
        style={{ backgroundImage: bodyMuscles.backMuscles.join() }}
      />
    </div>
  );
};
ExerciseMuscles.propTypes = {
  exercise: PropTypes.object.isRequired,
  classes: PropTypes.any.isRequired,

};
export default withStyles(styles)(ExerciseMuscles);
