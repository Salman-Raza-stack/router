import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItmes from "./Components/ProductItmes";
import NavBar from "./Components/NavBar";
function RouterConfig() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:id" component={ProductItmes} />
          <Route exact path="*" component={() => <h2>404 not Found </h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
