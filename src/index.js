import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components";
import { Application, Comments, PageNotFound } from "./views";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const NavRoute = ({ exact, path, component: Component }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <>
          <Navbar />
          <Component {...props} />
        </>
      )}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <div className="application-container">
      <Router>
        <Switch>
          <NavRoute exact={true} component={Application} path="/" />
          <NavRoute exact={true} component={Comments} path="/comments/:id" />
          <NavRoute component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
