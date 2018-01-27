import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createBrowserHistory';

//Form examples
import Demo from './components/Demo/Demo';
import FieldArrays from './components/FieldArraysForm/FieldArraysForm';
import Wizard from './components/WizardForm';

const history = createHistory();

const reducer = combineReducers({
  form: formReducer
});

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Demo} />
        <Route path="/wizard" component={Wizard} />
        <Route path="/fieldarrays" component={FieldArrays} /> 
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
