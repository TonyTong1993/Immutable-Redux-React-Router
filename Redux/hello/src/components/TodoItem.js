import React from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions/TodoAction';
const TodoItem = ({children,task_id,status,visible,onClick})=>{
	var className = status?"completed":"active"
	return (
		<li className="todoItem" onClick={()=>onClick(task_id)}>
			<p className={className}>{children}</p>
		</li>
		);	
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onClick:(task_id)=>{
        dispatch(setCompleted(task_id))
        console.log('task_id');
    }
  }
}
export default connect(null,mapDispatchToProps)(TodoItem);