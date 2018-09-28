import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import EventApp from "./pages/CalendarEvents/EventApp";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" component={EventApp} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
