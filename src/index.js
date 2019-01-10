import React from 'react';
import {render} from 'react-dom';
import App from './core/App';
/* 
// TODO: Remove... not needed?
import {setConfig} from 'react-hot-loader';
// Configure RHL
setConfig({
    ignoreSFC: true,
    pureSFC: true,
    pureRender: true
});
 */
render(<App />, document.getElementById('root'));
