import React, { useState } from "react";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCarousel } from "./data";

function Weblogs() {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const settings = {
    adaptiveHeight: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainCarousel}>
      <Slider {...settings}>
        {dataCarousel.map((item) => (
          <div className={styles.weblogBoxes} key={item.id}>
            <div
              className={styles.cardItem}
              style={{
                backgroundImage: `url(${
                  hoveredItemId === item.id ? item.image : ""
                })`,
              }}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Weblogs;
