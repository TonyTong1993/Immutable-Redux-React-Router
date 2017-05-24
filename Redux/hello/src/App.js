import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore ,compose} from 'redux';
import { Provider } from 'react-redux';
import { todos as reducer } from './reducers/TodoReducer';
import { addTodo } from './actions/TodoAction';
import Root from './container/Root';
import DevTools from './DevTools';
import { persistState } from 'redux-devtools';
const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);
let store = createStore(reducer,enhancer);
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Root /> 
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default App;
