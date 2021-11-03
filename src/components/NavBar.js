import React, { useState } from "react";
// import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { Mainmenu } from "../mainmenu";
import { Accordion } from "./Accordion";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(sidebar);

  return (
    <div className="header">
      <div className="container">
        <div className={sidebar ? "sidemenu" : "hidden"}>
          <Accordion />
        </div>

        <div className="header_hamburger" onClick={showSidebar}>
          {sidebar ? (
            <MdCancel style={{ height: 35, width: 35 }} />
          ) : (
            <GiHamburgerMenu style={{ height: 35, width: 35 }} />
          )}
        </div>
        <div className="header_logo">
          <Link to="/">Textil-Home</Link>
        </div>

        <nav className="header_nav">
          {Mainmenu.map((item) => (
            <div key={Math.random()} className="header_nav_links">
              <Link to="#">{item.title}</Link>
            </div>
          ))}

          <div className="header_nav_cart">
            <AiOutlineShoppingCart style={{ height: 35, width: 35 }} />
            <div className="header_nav_cart_number">33</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
