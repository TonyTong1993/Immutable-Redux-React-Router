import { ADD_TODO,COMPLETED } from '../actions/TodoAction';
export const todos = (state=[],action)=>{
	switch (action.type) {
		case ADD_TODO:
         return state.concat([{ 
          task_name: action.task_name,
          status: action.status,
          visible:action.visible,
          task_id:action.task_id}]);
        case COMPLETED:
         return state.map(todo =>
         	todo.task_id === action.task_id ? {...todo,status:!todo.status}:todo
         	)
		default:
		return state;
	}	
}; 