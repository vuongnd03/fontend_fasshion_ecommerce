import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import React from "react";
import styles from "./AddToCartBtn.module.css";

const AddToCartBtn = ({ data }) => {
  const dispatch = useAppDispatch();
  const { sizeSelection, colorSelection } = useAppSelector(
    (state) => state.products
  );

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() =>
        dispatch(
          addToCart({
            id: data.id,
            name: data.title,
            srcUrl: data.srcUrl,
            price: data.price,
            attributes: [sizeSelection, colorSelection.name],
            discount: data.discount,
            quantity: data.quantity,
          })
        )
      }
    >
      Thêm Vào Giỏ Hàng
    </button>
  );
};

export default AddToCartBtn;

