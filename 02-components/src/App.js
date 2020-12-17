import React from "react";
import BorderedImageFrame from "./BorderedImageFrame";
import Alert from "./Alert";
import SumOfTwo from "./SumOfTwo";
import ImageFrame from "./ImageFrame";

function sayHello() {
  return "hello";
}

function sayGoodbye() {
  return <h2>Time to say goodbye</h2>;
}

function App() {
  return (
    <React.Fragment>
      <SumOfTwo number1={3} number2={4} />
      <h1>{sayHello()}</h1>
      {sayGoodbye()}
      <Alert message="Hello there" bgcolor="orange" />
      <ImageFrame />
      <BorderedImageFrame image={require("./dog.gif").default} />
      <BorderedImageFrame />
    </React.Fragment>
  );
}

export default App;
