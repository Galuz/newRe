import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Galuz from './ui/Galuz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Galuz />, document.getElementById('root'));
registerServiceWorker();
