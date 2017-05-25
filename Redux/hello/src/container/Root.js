import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import  PropTypes  from 'prop-types';
export default class Root extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<AddTodo />
        <TodoList />
      </div>
    );
  }
}