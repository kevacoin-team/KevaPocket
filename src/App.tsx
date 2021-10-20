import React from "react";
import "./styles/App.css";
import { RouterFragment } from "./view-fragments/RouterFragment";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterFragment>
        <Route path="/" exact>
          <div>
            <h1>Router works</h1>
            <Link to="/test">Test Router</Link>
            <p>{window.location.hostname}</p>
          </div>
        </Route>
        <Route path="/test">
          <Link to="/">Go back</Link>
          <div>Router still works</div>
        </Route>
      </RouterFragment>
    </div>
  );
}

export default App;
