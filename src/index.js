import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Loader from "../public/components/Loader";
import ErrorBoundary from "../public/components/ErrorBoundary";

import "./styles.css";

const Calendar = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1200)).then(() =>
    Math.floor(Math.random() * 10) >= 4
      ? import("../public/components/Calendar")
      : Promise.reject(new Error())
  );
});

const Header = styled.h1`
  position: absolute;
  width: 100%;
  margin: 100px auto;
`;

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header>Calendar</Header>

        <Suspense maxDuration={300} fallback={<Loader />}>
          <div className="calendar-container">
            <Calendar />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
