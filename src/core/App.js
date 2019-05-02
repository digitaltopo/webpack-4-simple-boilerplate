import React, {Suspense} from 'react';
import {hot} from 'react-hot-loader/root';

import Loading from '../components/Loading'; // Loading Indicator Component
import Test from '../components/Test/lazy'; // Lazy Loading Component

const App = () => (
    <div>
        <h1>Hello React World!</h1>

        <Suspense fallback={<Loading />}>
            <Test />
        </Suspense>
    </div>
);

export default hot(App);
