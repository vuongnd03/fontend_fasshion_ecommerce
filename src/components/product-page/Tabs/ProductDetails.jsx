import React from "react";
import styles from "./ProductDetails.module.css";

const specsData = [
  {
    label: " Thành phần chất liệu",
    value: "100% Cotton",
  },
  {
    label: "Hướng dẫn bảo quản",
    value: "Giặt máy nước ấm, sấy khô",
  },
  {
    label: "Kiểu dáng",
    value: "Classic Fit",
  },
  {
    label: "Họa tiết",
    value: "Trơn",
  },
];

const ProductDetails = () => {
  return (
    <>
      {specsData.map((item, i) => (
        <div className={styles.row} key={i}>
          <div>
            <p className={styles.label}>
              {item.label}
            </p>
          </div>
          <div className={styles.valueContainer}>
            <p className={styles.value}>
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;

