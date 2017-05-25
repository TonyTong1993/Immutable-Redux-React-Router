import React from 'react';
const TodoItem = ({children,onClick,status,visible})=>{
	var className = status?"completed":"active"
	return (
		<li className="todoItem" onClick={onClick}>
			<p className={className}>{children}</p>
		</li>
		);	
}
export default TodoItem;