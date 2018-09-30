import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "./redux/configureStore";
import EventApp from "./pages/CalendarEvents/EventApp";
import AddEvent from "./pages/AddEvent/AddEvent";
import EditEvent from "./pages/EditEvent/EditEvent";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={EventApp} />
            <Route exact path="/add-event/:date" component={AddEvent} />
            <Route
              exact
              path="/edit-event/:date/:eventId"
              component={EditEvent}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
