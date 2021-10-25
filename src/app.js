import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addRecipie } from './actions/recipies';
import { setTextFilter } from './actions/filters';
import getVisibleRecipies from './selectors/Recipies';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'

const store = configureStore();
console.log("Value of the store")
store.dispatch(addRecipie({ description: 'Daal Chwal', amount: 4500 }));
store.dispatch(addRecipie({ description: 'Biryani', createdAt: 1000 }));
store.dispatch(addRecipie({ description: 'Pasta', amount: 109500 }));

const state = store.getState();
const visibleRecipies = getVisibleRecipies(state.recipies, state.filters);
console.log(visibleRecipies);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
