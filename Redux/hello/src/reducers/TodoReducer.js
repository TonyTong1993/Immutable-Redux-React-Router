import { ADD_TODO,COMPLETED,VISIBILITY_FILTER} from '../actions/TodoAction';
import { combineReducers } from 'redux';
const todos = (state=[],action)=>{
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
const visibilityFilter = (state="ALL",action)=>{
  switch (action.type) {
    case VISIBILITY_FILTER:
      return action.filter
    default:
    return state;
  }
}
export default combineReducers({
  todos:todos,
  filter:visibilityFilter
})