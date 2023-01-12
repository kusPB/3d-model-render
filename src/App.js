import React from "react";
// import MViewer from "./MViewer";
import LoadModel from "./LoadModel";
import Blue from "./Blue";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={MViewer} /> */}
      {/* <Route exact path="/render" component={LoadModel} /> */}
      <Route exact path="/" component={Blue} />
    </Router>
  );
}

export default App;
