import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const DropdownItems = () => {
  return (
    <div className={styles.dropdownMenu}>
      <p>RandomItem1</p>
      <p>RandomItem2</p>
      <p>RandomItem3</p>
    </div>
  );
};

export default DropdownItems;
