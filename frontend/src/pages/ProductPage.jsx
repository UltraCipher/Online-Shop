import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/card/Card";
import Loader from "../components/loader/Loader";
import styles from "./ProductPage.module.css";

import { CiSearch } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";

function ProductPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHandler = () => {
    console.log("search");
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName === !"LI") return;
    console.log(category);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={searchHandler}>
          <CiSearch />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Women's Clothing</li>
            <li>Men's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
