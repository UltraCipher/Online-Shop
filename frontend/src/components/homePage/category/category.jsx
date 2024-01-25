import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./Category.module.scss";
import CategoryCard from "./categotyCard";

const Category = ({ image, name, dis }) => {
  return (
    <React.Fragment>
      <div className={styles.CategoryContainer}>
        <div>
          <img src={image} />
          <h3>{name}</h3>
          <div className={styles.categoryDetails}>
            <p>{dis}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Category;
