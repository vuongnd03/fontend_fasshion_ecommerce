import React from "react";
import PhotoSection from "./PhotoSection";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import { formatPrice } from "@/lib/utils";
import styles from "./Header.module.css";

const Header = ({ data }) => {
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
    <>
      <div className={styles.container}>
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1 className={cn([integralCF.className, styles.title])}>
            {data.title}
          </h1>
          <div className={styles.ratingContainer}>
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
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
                {`-${formatPrice(data.discount.amount)}`}
              </span>
            )}
          </div>
          <p className={styles.description}>
            Áo thun graphic này hoàn hảo cho mọi dịp. Được làm từ
            vải mềm và thoáng khí, mang lại sự thoải mái và phong cách vượt trội.
          </p>
          <hr className={styles.divider} />
          <ColorSelection />
          <hr className={styles.divider} />
          <SizeSelection />
          <hr className={styles.dividerHidden} />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;

