import React from "react";
// import { getPatients } from "./services";
import Practitioner from './components/Practitioner';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  // componentDidMount() {
  //   getPatients().then((res) => {
  //     console.log(res);
  //   });
  // };

  return(
      <ErrorBoundary>
        <Practitioner />
      </ErrorBoundary>
  );
}

export default App;
