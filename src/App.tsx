import React from "react";
import { graphql } from "react-relay";
import "./App.css";

const Query = graphql`
  query AppQuery {
    getTest {
      test
    }
  }
`;

function App() {
  return <div className="App">Test</div>;
}

export default App;
