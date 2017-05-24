import { ADD_TODO } from '../actions/TodoAction';
export const todos = (state=[],action)=>{
	switch (action.type) {
		case ADD_TODO:
         return state.concat([{ 
          task_name: action.task_name,
          status: action.status,
          visible:action.visible,
          task_id:action.task_id}]);
		default:
		return state;
	}	
};