import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* COMPONENTS */
import { Home, About } from '../../components';

/* CSS */
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link className="link-app" to="/">Home</Link>
        </li>
        <li>
          <Link className="link-app" to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export { App };
