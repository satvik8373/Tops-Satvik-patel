import React from "react";
import CounterComponent from "./CounterComponent";
import UserComponent from "./UserComponent";
import RTKComponent from "./RtkComponent";
import FirebaseCrud from "./FirebaseCrud";
import Demo from "./Demo";


function App() {
  return (
    <>
    <h2>Counter Component</h2>
      <br></br>
    <h2>User Component</h2>
    <FirebaseCrud />
    <h2>RTK Component</h2>

    <h2>Demo</h2>
    <Demo />
    
      
    </>
  );
}

export default App;