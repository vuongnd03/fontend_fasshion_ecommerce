import React from "react";
import Rating from "../ui/Rating";
import { Link } from "react-router-dom";
import { formatPrice, formatVND } from "@/lib/utils";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  const calculatePrice = () => {
    if (data.discount.percentage > 0) {
      return data.price - (data.price * data.discount.percentage) / 100;
    } else if (data.discount.amount > 0) {
      return data.price - data.discount.amount;
    }
    return data.price;
  };

  const finalPrice = calculatePrice();
  const originalPrice = data.price;

  return (
    <Link
      to={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <img
          src={data.srcUrl}
          className={styles.image}
          alt={data.title}
        />
      </div>
      <strong className={styles.title}>{data.title}</strong>
      <div className={styles.ratingContainer}>
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className={styles.ratingText}>
          {data.rating.toFixed(1)}
          <span className={styles.ratingSlash}>/5</span>
        </span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>
          {formatPrice(finalPrice)}
        </span>
        {(data.discount.percentage > 0 || data.discount.amount > 0) && (
          <span className={styles.originalPrice}>
            {formatPrice(originalPrice)}
          </span>
        )}
        {data.discount.percentage > 0 && (
          <span className={styles.discountBadge}>
            {`-${data.discount.percentage}%`}
          </span>
        )}
        {data.discount.amount > 0 && (
          <span className={styles.discountBadge}>
            {`-${formatVND(data.discount.amount)} VND`}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

