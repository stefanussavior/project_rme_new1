import "./NavigationBar.css";
import { FaBars } from 'react-icons/fa';

export default function NavigationBar() {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return(
        <>
       <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a className="icon" onClick={() => myFunction()}>
        <FaBars/>
  </a>
</div>

<div style= {{
    paddingLeft: "12px"
}}>
  <h2>Responsive Topnav Example</h2>
  <p>Resize the browser window to see how it works.</p>
</div>
        </>
    )
}