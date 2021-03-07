import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetwork from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <SocialNetwork />
    </React.StrictMode>,
    document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// next lesson: https://www.youtube.com/watch?v=fltI2uTv12c&list=PLcvhF2Wqh7DM3z1XqMw0kPuxpbyMo3HvN
// TODO: типизировать остальные компоненты

/*
fixme: 1. переписать redux form на REACT FINAL FORM
      2. в input статуса добавить кнопку галочку для сабмита
      3. добавить возможность удалять посты
      4. HeaderContainer типизировать
* */