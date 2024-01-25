import React, { Component } from "react";
import Weblogs from "./weblogs";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

import coffeeMachine from "/coffeeMachine.jpg";
import menu from "/menu.jpg";
import coffeeShop from "/coffeeShop.jpg";
import restaurant from "/restaurant.jpg";
import Carousel from "../../carousel/carousel";

const WeblogsDetails = styled.ul`
  background-color: #f3f0eecf;
  padding: 5%;
  .weblogsTitle {
    text-align: center;
    h2 a {
      color: #000000;
    }
    p {
      color: #000000;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .weblogBoxesContainer {
    padding: 3%;
    /* background-color: #80456e; */
  }
`;

class WeblogDetails extends Component {
  render() {
    return (
      <WeblogsDetails>
        <React.Fragment>
          <div className="weblogsTitle">
            <h2>Weblogs</h2>
            <p>
              <Link to="/weblog">View all weblogs </Link>
            </p>
          </div>
          <div>
            <Carousel />
          </div>

          <div className="weblogBoxesContainer">
            <Weblogs
              backgroundImg={restaurant}
              title="The Chefs’ Table Society of BC"
            />
            <Weblogs
              backgroundImg={coffeeShop}
              title="What are 3 facts about coffee drinkers?"
            />
            <Weblogs
              backgroundImg={coffeeMachine}
              title="Coffee Machine Brewing Guide"
            />
            <Weblogs
              backgroundImg={menu}
              title="What is the most popular meal in the world?"
            />
            <Weblogs
              backgroundImg={coffeeShop}
              title="What is the history of espresso?"
            />
          </div>
        </React.Fragment>
      </WeblogsDetails>
    );
  }
}

export default WeblogDetails;
