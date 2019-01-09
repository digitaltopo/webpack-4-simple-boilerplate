import React from 'react';
import {setConfig} from 'react-hot-loader';
import {render, setHotElementComparator} from 'react-dom';
import App from './core/App';

// Configure RHL
setConfig({
    ignoreSFC: !!setHotElementComparator,
    pureSFC: true,
    pureRender: true
});
render(<App />, document.getElementById('root'));
