import CartCounter from "@/components/ui/CartCounter";
import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import styles from "./AddToCardSection.module.css";

const AddToCardSection = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.container}>
      <CartCounter onAdd={setQuantity} onRemove={setQuantity} />
      <AddToCartBtn data={{ ...data, quantity }} />
    </div>
  );
};

export default AddToCardSection;

