import React from "react";
import styles from "./Error.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className={styles.ErrorConteiner}>
      <h1>Error-404</h1>

      <p>
        Sorry we couldn't find that page. Try searching or go to Ventishops's
        home page.
      </p>

      <button>
        <li>
          <Link to="/">Back to home page</Link>
        </li>
      </button>
    </div>
  );
};

export default Error404;
