import React from 'react';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import { addTodo,setVisiblityFilter } from '../actions/TodoAction'
 class AddTodo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
  	var input;
  	const {onClick,filterItemClick} = this.props;
    return (	
      <div className="addTodo">
      	<form >
      		<input type="text" ref={node => input = node}/>
      		<a onClick={()=>{
      			if (!input.value.trim()) {return};
      			onClick(input.value);
      			input.value = '';
      		}}>添加</a>
          <a className="activeItem" onClick={()=>filterItemClick("ACTIVE")}>进行中</a>
          <a className="inactiveItem" onClick={()=>filterItemClick("INACTIVE")}>已完成</a>
          <a className="allItem" onClick={()=>filterItemClick("ALL")}>所有</a>
      	</form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
	return {
		onClick:(task_name)=>{
			dispatch(addTodo(task_name))
		},
		filterItemClick:(filter)=>{
      dispatch(setVisiblityFilter(filter))
    }
	}
}
export default connect(null,mapDispatchToProps)(AddTodo);