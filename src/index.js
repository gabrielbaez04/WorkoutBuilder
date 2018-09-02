import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ExerciseList from '../src/components/ExerciseList';
import DashboardContainer from '../src/components/DashboardContainer';

ReactDOM.render(<DashboardContainer/>, document.getElementById('root'));
registerServiceWorker();
