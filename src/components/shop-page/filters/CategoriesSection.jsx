import { Link } from "react-router-dom";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./CategoriesSection.module.css";

const categoriesData = [
  {
    title: "Áo thun",
    slug: "/shop?category=t-shirts",
  },
  {
    title: "Quần short",
    slug: "/shop?category=shorts",
  },
  {
    title: "Áo sơ mi",
    slug: "/shop?category=shirts",
  },
  {
    title: "Áo hoodie",
    slug: "/shop?category=hoodie",
  },
  {
    title: "Quần jean",
    slug: "/shop?category=jeans",
  },
];

const CategoriesSection = () => {
  return (
    <div className={styles.list}>
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          to={category.slug}
          className={styles.link}
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;

