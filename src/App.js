import "./styles.css";

import React from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
const Home = (props) => {
  console.log(props);
  return <h1>Home Page</h1>;
};
const About = (props) => {
  const history = useHistory();
  console.log("History in About page", history);
  // console.log("props", props);
  return <h1>About Page</h1>;
};
const Contact = () => {
  const history = useHistory();
  console.log("History in Contact page", history);

  // console.log(history.push("/about"));

  return <h1>Contact Page</h1>;
};
const NotFound = () => <h1> Not Found</h1>;
function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          exact
          // activeClassName="active-navlink"
        >
          Main page
        </NavLink>
        <NavLink
          to="/about"
          //  replace
        >
          About
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" render={(props) => <About {...props} />} />

          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
