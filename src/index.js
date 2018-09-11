import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './utils/helper'
import registerServiceWorker from './registerServiceWorker';
import Workout from '../src/components/Workout';

ReactDOM.render(<Workout/>, document.getElementById('root'));
registerServiceWorker();
