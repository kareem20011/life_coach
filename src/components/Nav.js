import React from "react";
import Logo from "./imgs/logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

class Nav extends React.Component {
  render() {
    const Dropdown = () => {
      let list = document.getElementById("list");
      list.classList.toggle("hide");
    };
    return (
      <section className="Navbar">
        <nav>
          
          <div className="responsNav">
            <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            <button id="bars" onClick={Dropdown}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          
          <ul className="hide" id="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
            <MyButton/>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Nav;
