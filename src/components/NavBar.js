import React, { useState } from "react";
import styles from "../styles/Nav.module.scss";
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
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <div className={sidebar ? styles.nav_sidemenu : styles.nav_hidden}>
          <Accordion />
        </div>

        <div className={styles.nav_hamburger} onClick={showSidebar}>
          {sidebar ? (
            <MdCancel style={{ height: 25, width: 35 }} />
          ) : (
            <GiHamburgerMenu style={{ height: 25, width: 25 }} />
          )}
        </div>
        <div>
          <Link to="/" className={styles.nav_navlink}>
            Textil-Home
          </Link>
        </div>

        <div className={styles.nav_links}>
          <div className={styles.nav_navlinks}>
            {Mainmenu.map((item) => {
              return (
                <Link to="#" key={Math.random()} className={styles.nav_navlink}>
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className={styles.nav_cart}>
            <AiOutlineShoppingCart style={{ height: 35, width: 35 }} />
            <button>33</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
