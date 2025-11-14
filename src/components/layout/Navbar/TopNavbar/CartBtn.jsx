import { useAppSelector } from "@/lib/hooks/redux";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./CartBtn.module.css";

const CartBtn = () => {
  const { cart } = useAppSelector((state) => state.carts);

  return (
    <Link to="/cart" className={styles.cartLink}>
      <img
        src="/icons/cart.svg"
        alt="cart"
        className={styles.cartIcon}
      />
      {cart && cart.totalQuantities > 0 && (
        <span className={styles.badge}>
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;

