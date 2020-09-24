import React from "react";
import "./styles.css";
import MovieApp from "./components/MovieApp";
import Trailer from "./components/Trailer";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MovieApp} />
          <Route
            exact
            path="/trailer/:id"
            render={props => <Trailer {...props} />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}
