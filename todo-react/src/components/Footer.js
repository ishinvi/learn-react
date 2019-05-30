import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter, setVisibilityFileter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button
          disabled={filter === "all"}
          onClick={() => setVisibilityFileter("all")}
        >
          All
        </button>
        <button
          disabled={filter === "active"}
          onClick={() => setVisibilityFileter("active")}
        >
          Active
        </button>
        <button
          disabled={filter === "completed"}
          onClick={() => setVisibilityFileter("completed")}
        >
          Complete
        </button>
      </div>
    );
  }
}

export default Footer;
