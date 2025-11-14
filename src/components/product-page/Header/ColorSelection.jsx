import {
  setColorSelection,
} from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { cn } from "@/lib/utils";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import styles from "./ColorSelection.module.css";

const colorsData = [
  {
    name: "Nâu",
    code: "bg-[#4F4631]",
  },
  {
    name: "Xanh lá",
    code: "bg-[#314F4A]",
  },
  {
    name: "Xanh dương",
    code: "bg-[#31344F]",
  },
];

const ColorSelection = () => {
  const { colorSelection } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <span className={styles.label}>
        Chọn Màu Sắc
      </span>
      <div className={styles.colors}>
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              color.code,
              styles.colorButton,
            ])}
            onClick={() => dispatch(setColorSelection(color))}
          >
            {colorSelection.name === color.name && (
              <IoMdCheckmark className={styles.checkIcon} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;

