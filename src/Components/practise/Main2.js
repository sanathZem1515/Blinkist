// const { Component } = React;
// const { render } = ReactDOM;
import React, { Component } from "react";

class MainItem2 extends Component {
  render() {
    return (
      <div>
        <Content
          ref={(instance) => {
            this.content = instance;
          }}
        />
        <Footer clear={() => this.content.clearSelection()} />
      </div>
    );
  }
}

export default MainItem2;

class Content extends Component {
  clearSelection = () => {
    alert("cleared!");
  };

  render() {
    return <h1>Content</h1>;
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        Footer <button onClick={() => this.props.clear()}>Clear</button>
      </div>
    );
  }
}
