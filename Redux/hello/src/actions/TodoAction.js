export const ADD_TODO = 'ADD_TODO';
export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';//过滤visible
let taskID = 0;
export const addTodo = (task_name)=>{
	return {
		type:ADD_TODO,
		visible:true,
		task_id:taskID++,
		status:false,
		task_name
	}
}