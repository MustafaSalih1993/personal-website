import "./Main.css";
import Navbar from "./Navbar/Navbar";

function Main(props) {
  let { mobileNav, setMobileNav } = props;
  return (
    <div className="main-container">
      {mobileNav ? (
        <div></div>
      ) : (
        <Navbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}

      <div className="text-container">
        <div className="main-text">MUSTAFA</div>
        <div className="sub-text">A SOFTWARE AND A WEB DEVELOPER</div>
      </div>
    </div>
  );
}

export default Main;
