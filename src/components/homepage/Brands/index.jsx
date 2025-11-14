import React from "react";
import styles from "./Brands.module.css";

const brandsData = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];

const Brands = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.container}>
        {brandsData.map((brand) => (
          <img
            key={brand.id}
            src={brand.srcUrl}
            alt={brand.id}
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;

