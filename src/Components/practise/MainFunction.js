// const { Component } = React;
// const { render } = ReactDOM;
import React, { useRef } from "react";

const MainItemFunction = () => {
  let ref;
  const handler = (temp) => {
    ref = temp;
    console.log(ref);
  };
  return (
    <div>
      <Content handler={handler} />
      <Footer clear={() => ref.current()} />
    </div>
  );
};

export default MainItemFunction;

const Content = (props) => {
  const clearSelection = () => {
    alert("cleared!");
  };
  const textInput = useRef(clearSelection);
  props.handler(textInput);
  return <h1>Content</h1>;
};

const Footer = (props) => {
  return (
    <div>
      Footer <button onClick={() => props.clear()}>Clear</button>
    </div>
  );
};
