import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [stickyNavbar, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navigate = useNavigate();

  const navigateTo = (path) => {
    // Check if it's the "Contact" link
    if (path === "/#contact-section") {
      // Navigate to "/" first
      navigate("/");

      // Get the contact section element
      const contactSection = document.getElementById("contact-section");

      // Check if the element exists before scrolling
      if (contactSection) {
        // Use smooth scrolling to the contact section
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        console.log("Element with id 'contact-section' not found");
      }
    } else {
      // For other links, use regular navigation
      navigate(path);
    }
  };

  return (
    <nav className={stickyNavbar ? "navbar" : "sticky-navbar"}>
      <div className="navbar-container">
        <div className="logo-part" onClick={() => navigateTo("/terabhAI")}>
          <img
            alt="terabh logo"
            src="./img/logo.png"
            className="nav-logo-img"
          />
          <p className="navbar-company-name">Terabh</p>
        </div>
        <div className="navbar-texts">
          <div onClick={() => navigateTo("/")} style={{ cursor: "pointer" }}>
            <div className="nav-text-button">
              <p className="navbar-text">Home</p>
            </div>
          </div>

          <div
            onClick={() => navigateTo("/terabhAI")}
            style={{ cursor: "pointer" }}
          >
            <div className="nav-text-button">
              <p className="navbar-text">Product</p>
            </div>
          </div>
          <div
            onClick={() => navigateTo("/registration")}
            style={{ cursor: "pointer" }}
          >
            <div className="nav-text-button">
              <p className="navbar-text">α - registration</p>
            </div>
          </div>
          <div
            onClick={() => navigateTo("/#contact-section")}
            style={{ cursor: "pointer" }}
          >
            <div className="nav-text-button nav-contact">
              <p className="navbar-text">Contact</p>
            </div>
          </div>
        </div>
        {/* <Menu className="bm-burger-button">
          <a href="/" onClick={() => navigateTo("/")}>Home</a>
          <a href="/terabhAI" onClick={() => navigateTo("/terabhAI")}>Product</a>
          <a href="/registration" onClick={() => navigateTo("/registration")}>α - registration</a>
          <a href="/#contact-section" onClick={() => navigateTo("/#contact-section")}>Contact</a>
        </Menu> */}
      </div>

    </nav>
  );
}

export default Navbar;
