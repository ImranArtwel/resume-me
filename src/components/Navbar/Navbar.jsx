import React, { useState } from "react";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <h3>Imran Artwel </h3>

          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills"
                smooth
                spy
                offset={-120}
                className="menu-item"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="work-exp"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="testimonial"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Testimonials
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="projects"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Connect With Me
              </Link>
            </li>

            {/* <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button> */}
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
