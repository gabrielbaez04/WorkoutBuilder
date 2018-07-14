import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WorkoutList from '../src/components/WorkoutList';

ReactDOM.render(<WorkoutList />, document.getElementById('root'));
registerServiceWorker();
