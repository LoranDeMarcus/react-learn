import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

window.state = store.getState();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// next lesson: https://www.youtube.com/watch?v=b3pU3hsJlNk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=62 : 13:34