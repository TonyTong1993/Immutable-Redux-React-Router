import React from 'react';
import  PropTypes  from 'prop-types';
import { connect } from 'react-redux';
 class TodoList extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    const node = todos.map(todo=>{
      return <li key={todo.task_id}>{todo.task_name}</li>
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

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);