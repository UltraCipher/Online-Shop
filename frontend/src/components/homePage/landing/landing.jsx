import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import industrial from "/industrial.png";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <React.Fragment>
      <div className={styles.landingContainer}>
        <div className={styles.landingTitleContainer}>
          <div className={styles.landingTitle}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.linksContainer}>
              <button className={styles.productsBtn}>
                <li>
                  <Link to="/products">View all products</Link>
                </li>
              </button>
              <button className={styles.loginSignupBtn}>
                <li>
                  <Link to="/login">Login / Signup</Link>
                </li>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.landingImg}>
          <img src={industrial} alt="landingimg" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
