import store from './redux/store-redux';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <HashRouter >
        <Provider store={store}>

            <App />
        </Provider>
    </HashRouter>, document.getElementById('root')
);

// export default rerenderEntireTree;
// ReactDOM.render(<List />, document.getElementById('roote'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();