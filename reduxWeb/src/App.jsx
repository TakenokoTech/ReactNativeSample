import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import store from './store/index.jsx';
import BaseCompornent from './compornents/BaseCompornent.jsx';

ReactDOM.render(
    <Provider store={store}><BaseCompornent /></Provider>,
    document.querySelector('.content')
);
