import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FaShoppingBasket } from "react-icons/fa";
import { ShortenText } from "../../helper/helper";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{ShortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <CgDetailsMore />
        </Link>
        <button>
          <FaShoppingBasket />
        </button>
      </div>
    </div>
  );
}

export default Card;
