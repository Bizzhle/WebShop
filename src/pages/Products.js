import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";

export default function Products() {
  const [products, setProducts] = useState("");
  console.log(products);

  const title = "sort ";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="products">
      <section className="products_bar">
        <div className="products_bar_searchbar">
          <SearchBar />
        </div>
        <div className="products_bar_selectbar">
          <SelectBar title={title} />
        </div>
      </section>
      <section className="products_card">
        {products &&
          products.map((value) => <ProductCard key={value.id} value={value} />)}
      </section>
      <section>
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
}
