import { BrowserRouter as Router, Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
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
            <Link to="/weblogs">Blogs</Link>
          </li>
          <li>
            <Link to="/frequentlyAsked">Frequently Asked</Link>
          </li>
        </div>
      </div>

      <div className={styles.navbarIcons}>
        <div className={styles.iconContainer}>
          <li>
            <Link to="/cart">
              <BsBasket />
            </Link>
          </li>
        </div>

        <button className={styles.loginSignupBtn}>
          <li>
            {isLogin ? (
              <Link to="/login">
                <FaRegUser fontSize="1.2em" /> &nbsp; Login
              </Link>
            ) : (
              <Link to="/dashboard">
                <IoSettingsOutline fontSize="1.2em" /> &nbsp; Dashboard
              </Link>
            )}
          </li>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
