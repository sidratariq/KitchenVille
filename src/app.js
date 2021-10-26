import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addRecipie } from './actions/recipies';
import { setTextFilter } from './actions/filters';
import { startSetRecipies } from './actions/recipies'
import getVisibleRecipies from './selectors/Recipies';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'

const store = configureStore();
console.log("Value of the store")

const state = store.getState();
const visibleRecipies = getVisibleRecipies(state.recipies, state.filters);
console.log(visibleRecipies);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetRecipies()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});