import React, { Component } from "react";
export const Context = React.createContext();

//***************************//

class MainItem extends Component {
  callback(fn) {
    fn();
  }

  render() {
    return (
      <div>
        <Context.Provider value={{ callback: this.callback }}>
          <Content />
          <Footer />
        </Context.Provider>
      </div>
    );
  }
}

export default MainItem;

//***************************//

class Content extends Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <div
            onClick={() =>
              value.callback(() => console.log("Triggered from content"))
            }
          >
            Content: Click Me
          </div>
        )}
      </Context.Consumer>
    );
  }
}

//***************************//

class Footer extends Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <div
            onClick={() =>
              value.callback(() => console.log("Triggered from footer"))
            }
          >
            Footer: Click Me
          </div>
        )}
      </Context.Consumer>
    );
  }
}
