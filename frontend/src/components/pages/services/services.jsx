import React from "react";
import styles from "./Services.module.scss";
import { PiCrown } from "react-icons/pi";
import { BsSafe } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Services() {
  return (
    <div>
      <div className={styles.servicesBar}>
        <h2>Services</h2>
        <div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        <div className={styles.servicesBarIcons}>
          <p>
            <PiCrown size={20} /> Brilliant experience
          </p>

          <p>
            <GrValidate size={20} /> Guarantee
          </p>

          <p>
            <TfiHeadphoneAlt size={20} /> After sale service
          </p>

          <p>
            <BsSafe size={20} /> secure payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
