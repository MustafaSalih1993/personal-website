import Logo from "./components/Logo/Logo";
import Main from "./components/body/Main";
import "./App.css";
import { useState } from "react";

function App() {
  let [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="App">
      <Logo mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Main mobileNav={mobileNav} setMobileNav={setMobileNav} />
    </div>
  );
}

export default App;
