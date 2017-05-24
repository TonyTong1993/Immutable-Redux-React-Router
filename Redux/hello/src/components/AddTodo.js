import React from 'react';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import { addTodo } from '../actions/TodoAction'
 class AddTodo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
  	var input;
  	const {onClick} = this.props;
    return (	
      <div>
      	<form>
      		<input type="text" ref={node => input = node}/>
      		<a onClick={()=>{
      			if (!input.value.trim()) {return};
      			onClick(input.value);
      			input.value = '';
      		}}>Add</a>
      	</form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
	return {
		onClick:(task_name)=>{
			dispatch(addTodo(task_name))
		}
		
	}
}
export default connect(null,mapDispatchToProps)(AddTodo);