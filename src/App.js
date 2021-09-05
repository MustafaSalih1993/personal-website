import Header from "./components/Header/Header";
import Main from "./components/body/Main";
import Projects from "./components/body/pages/projects/Projects";
import About from "./components/body/pages/about/About";
import Contact from "./components/body/pages/contact/Contact";
import { useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import MobileNavbar from "./components/body/MobileNavbar/MobileNavbar";
import NotFound from "./components/body/pages/404/404";

function App() {
  let [mobileNav, setMobileNav] = useState(false);
  return (
    <Router>
      <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Switch>
        <Route path="/" exact component={Main}>
          <Redirect to="/personal-website" />
        </Route>
        <Route path="/personal-website" component={Main}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
