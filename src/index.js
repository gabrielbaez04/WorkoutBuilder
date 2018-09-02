import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ExerciseList from '../src/components/ExerciseList';
import ExerciseContainer from '../src/components/ExerciseContainer';

ReactDOM.render(<ExerciseContainer/>, document.getElementById('root'));
registerServiceWorker();
