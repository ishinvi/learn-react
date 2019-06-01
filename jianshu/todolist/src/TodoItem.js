import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  render() {
    const { test, content, onClick } = this.props;
    return (
      <li onClick={onClick}>
        {test}-{content}
      </li>
    );
  }

  //一个组件要从父组件接受参数
  //如果这个组件第一次存在于父组件中，不会执行
  //如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps(nextProps) {
      console.log('child componentWillReceiveProps')
  }
  componentWillUnmount() {
      console.log('child componentWillUnmount')
  }
  shouldComponentUpdate(nextProps,nextStatus){
    if(nextProps.content!==this.props.content){
        return true;
    }
    return false;
  }
  
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  onClick: PropTypes.func
};
TodoItem.defaultProps={
    test:'hello'
}
export default TodoItem;
