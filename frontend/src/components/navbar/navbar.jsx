import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { BsBookmarks, BsBasket, BsSlashLg, BsCheckLg } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import DropdownItems from "./dropDownItems";

import React, { useContext } from "react";
import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const isLogin = false;
  return (
    <div className={styles.Container}>
      <div className={styles.navbarLinks}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Venti-Shop</h1>
          </Link>
        </div>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/weblogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/frequentlyAsked">Frequently Asked</NavLink>
        </li>
        <li>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link>About Us</Link>
            {isDropdownVisible && <DropdownItems />}
          </div>
        </li>
      </div>

      <div className={styles.navbarbuttons}>
        <button className={styles.basketBtn}>
          <NavLink to="/cart">
            <li>
              <BsBasket fontSize="1.2rem" />
            </li>
          </NavLink>
        </button>

        <button className={styles.loginBtn}>
          <li>
            {isLogin ? (
              <NavLink to="/login">
                <FaRegUser fontSize="1.2rem" /> Login
              </NavLink>
            ) : (
              <NavLink to="/dashboard">
                <IoSettingsOutline fontSize="1.2rem" />
                Dashboard
              </NavLink>
            )}
          </li>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
