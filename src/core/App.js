import React from 'react';
import {hot} from 'react-hot-loader/root';

import Test from '../components/test';

const App = () => (
    <div>
        <h1>Hello React World!</h1>
        <Test />
    </div>
);

export default hot(App);
