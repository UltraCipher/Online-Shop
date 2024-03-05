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
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarLogo}>
        <h1>
          <Link to="/">
            <h1>Venti-Shop</h1>
          </Link>
        </h1>

        <div className={styles.navbarLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link>Category</Link>
              {isDropdownVisible && <DropdownItems />}
            </div>
          </li>
          <li>
            <NavLink to="/weblogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/frequentlyAsked">Frequently Asked</NavLink>
          </li>
        </div>
      </div>

      <div className={styles.navbarIcons}>
        <div className={styles.iconContainer}>
          <li>
            <NavLink to="/cart">
              <BsBasket />
            </NavLink>
          </li>
        </div>

        <button className={styles.loginSignupBtn}>
          <li>
            {isLogin ? (
              <NavLink to="/login">
                <FaRegUser fontSize="1.2em" /> &nbsp; Login{" "}
              </NavLink>
            ) : (
              <NavLink to="/dashboard">
                <IoSettingsOutline fontSize="1.2em" /> &nbsp; Dashboard
              </NavLink>
            )}
          </li>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
