import Header from "./components/Header/Header";
import Main from "./Main";
import Projects from "./routes/projects/Projects";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import { useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import NotFound from "./routes/404/404";
import Resume from "./routes/resume/resume";

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
        <Route path="/resume" component={Resume}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
