import React from "react";
import ProductDetails from "./ProductDetails";
import styles from "./ProductDetailsContent.module.css";

const ProductDetailsContent = () => {
  return (
    <section>
      <h3 className={styles.title}>
        Thông số kỹ thuật sản phẩm
      </h3>
      <ProductDetails />
    </section>
  );
};

export default ProductDetailsContent;

