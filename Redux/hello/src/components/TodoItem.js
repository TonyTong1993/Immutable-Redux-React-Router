import React from 'react';
const TodoItem = ({children,onClick,status,visible})=>{
	return (
		<li className="todoItem" onClick={onClick}>
			<p>{children}</p>
		</li>
		);	
}
export default TodoItem;