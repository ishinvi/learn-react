import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
import Axios from "axios";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      list: []
    };
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        {/*这是一个注释 */}
        <div>
          <label htmlFor="filter">请输入内容:</label>
          <input
            id="filter"
            className="input"
            value={this.state.filter}
            onChange={this.handleChangeFilter}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, i) => {
            return (
              <TodoItem
                key={i}
                content={item}
                index={i}
                onClick={() => {
                  this.handleClickLi(i);
                }}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
  //在组件即将挂载到页面的时候自动执行
  componentWillMount() {
    console.log("componentWillMount");
  }
  //在组件即将挂载到页面的之后自动执行
  componentDidMount() {
    console.log("componentDidMount");
    Axios.get("api/todolist")
      .then(res => {
        console.log(res);
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch(() => {
        alert("error");
      });
  }
  //组件被更新之前，会自动执行
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  //组件被更新之前，会自动执行，但是他在shouldComponentUpdate之后执行
  //如果shouldComponentUpdate返回true才执行
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  handleSubmit = () => {
    this.setState(
      () => ({
        filter: "",
        list: [...this.state.list, this.state.filter]
      }),
      () => {
        console.log("执行完成");
      }
    );
  };
  handleClickLi = i => {
    const list = [...this.state.list];
    list.splice(i, 1);
    this.setState({
      list
    });
  };
}

export default TodoList;
