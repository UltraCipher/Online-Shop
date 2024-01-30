import React, { Component } from "react";
import Weblogs from "./weblogs";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./styles.module.scss";

class WeblogDetails extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className={styles.weblogsTitle}>
            <h2>Weblogs</h2>
            <p>
              <Link to="/weblog">View all weblogs </Link>
            </p>
            <Weblogs />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default WeblogDetails;
