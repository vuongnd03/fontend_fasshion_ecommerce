import { setSizeSelection } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { cn } from "@/lib/utils";
import React from "react";
import styles from "./SizeSelection.module.css";

const SizeSelection = () => {
  const { sizeSelection } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const sizes = ["Nhỏ", "Vừa", "Lớn", "Rất Lớn"];

  return (
    <div className={styles.container}>
      <span className={styles.label}>
        Chọn Kích Thước
      </span>
      <div className={styles.sizes}>
        {sizes.map((size, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              styles.sizeButton,
              sizeSelection === size && styles.sizeButtonActive,
            ])}
            onClick={() => dispatch(setSizeSelection(size))}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;

