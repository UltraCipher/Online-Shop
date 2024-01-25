import React from "react";
import styled from "styled-components";

const Weblogs = ({ title, backgroundImg }) => {
  const WeblogsInfo = styled.li`
    .weblogBoxes {
      height: 70px;
      margin: auto;
      margin-bottom: 2%;
      width: 70%;
      padding: 1% 3%;
      border-radius: 30px;
      border: #06060671 2px solid;
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      &:hover {
        border: #7e8a971a 2px solid;
        color: #fff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        background-image: url(${backgroundImg});
        transform: scale(1.03);
      }
    }
  `;

  return (
    <WeblogsInfo>
      <div className="weblogBoxes">
        <h3>{title}</h3>
      </div>
    </WeblogsInfo>
  );
};

export default Weblogs;
