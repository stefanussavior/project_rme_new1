import "./NavigationBar.css";
import { FaBars } from "react-icons/fa";

const myFunction = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

export default function NavigationBar() {
  return (
    <>
      <div className="topnav" id="myTopnav">
        {/* <a href="#section1" className="active">
          Home
        </a> */}
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <div className="right-navbar">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
        <a className="icon" onClick={() => myFunction()}>
          <FaBars />
        </a>
      </div>
    </>
  );
}
