import React from 'react';
import  PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { setCompleted } from '../actions/TodoAction';
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
      return <TodoItem key={todo.task_id} onClick={()=>onClick(todo.task_id)} status={todo.status} visible={todo.visible}>{todo.task_name}</TodoItem>
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
const mapStateToProps = (state,ownerProps)=>{
  return {
    todos:state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onClick:(task_id)=>{
        dispatch(setCompleted(task_id))
        console.log('task_id');
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);