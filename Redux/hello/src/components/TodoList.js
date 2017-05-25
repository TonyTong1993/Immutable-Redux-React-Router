import React from 'react';
import  PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
 class TodoList extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { todos,onClick } = this.props;
    const node = todos.map(todo=>{
      return <TodoItem key={todo.task_id} task_id={todo.task_id} status={todo.status} visible={todo.visible}>{todo.task_name}</TodoItem>
    })
    return (
      <div className="todoList">
            <ul>
             {node}
            </ul>
      </div>
    );
  }
}
const filterTodos = (filter,todos)=>{
  switch(filter) {

    case "ALL":
    return todos;
    case "ACTIVE":
    return todos.filter(todo=>todo.status ==false);
    case "INACTIVE":
    return todos.filter(todo=>todo.status ==true);
  }
}
const mapStateToProps = (state,ownerProps)=>{
  return {
    todos:filterTodos(state.filter,state.todos)
  }
}
export default connect(mapStateToProps,null)(TodoList);