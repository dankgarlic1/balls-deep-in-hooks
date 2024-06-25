import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  });
  return (
    <>
      {render ? <MyComponent1 /> : <div></div>}
      {/* <MyComponent1 /> */}
    </>
  );
}

function MyComponent() {
  useEffect(() => {
    console.error("Component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return <div>From inside my component</div>;
}

class MyComponent1 extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }
  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return <div>Hi there</div>;
  }
}
export default App;
