import React from "react";
import styles from "./Error.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className={styles.ErrorConteiner}>
      <h1>404 - page not found</h1>
      <div className={styles.errorGuid}>
        <p>The resource could not be found on this server!</p>

        <button className={styles.cta}>
          <li>
            <Link to="/">Back to home page</Link>
          </li>
        </button>
      </div>
    </div>
  );
};

export default Error404;
