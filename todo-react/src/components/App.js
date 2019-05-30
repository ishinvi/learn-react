import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
    this.nextTodoId = 0;
  }
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.props;
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer
          filter={filter}
          setVisibilityFileter={this.setVisibilityFileter}
        />
      </div>
    );
  }

  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };

  addTodo = text => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    this.setState({
      todos: newTodos
    });
  };

  setVisibilityFileter = filter => {
    this.setState({
      filter: filter
    });
  };
}

export default App;
