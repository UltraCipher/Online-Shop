import React, { Component } from "react";
import Category from "./category";
import styles from "./Category.module.scss";
import restorant2 from "/restorant2.png";
import kitchen from "/kitchen.png";
import industrial from "/industrial.png";
import coffeeshop from "/coffeeshop.png";

function CategoryCard() {
  return (
    <div className={styles.categorycardContainer}>
      <div className={styles.categoryMainDiv}>
        <div className={styles.CategoryTitle}>
          <h1>Category</h1>
        </div>
        <div className={styles.categoryCard}>
          <Category
            image={coffeeshop}
            name="coffee shop"
            dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <Category
            image={restorant2}
            name="Restorant"
            dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <Category
            image={industrial}
            name="Industrial"
            dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <Category
            image={kitchen}
            name="Kitchen"
            dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
