import React from "react";
import { PiTrashFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import CartCounter from "@/components/ui/CartCounter";
import { Button } from "../ui/button";
import {
  addToCart,
  remove,
  removeCartItem,
} from "@/lib/features/carts/cartsSlice";
import { useAppDispatch } from "@/lib/hooks/redux";
import { formatPrice } from "@/lib/utils";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  const dispatch = useAppDispatch();

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
    <div className={styles.container}>
      <Link
        to={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
        className={styles.imageLink}
      >
        <img
          src={data.srcUrl}
          className={styles.image}
          alt={data.name}
        />
      </Link>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link
            to={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
            className={styles.name}
          >
            {data.name}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className={styles.deleteButton}
            onClick={() =>
              dispatch(
                remove({
                  id: data.id,
                  attributes: data.attributes,
                  quantity: data.quantity,
                })
              )
            }
          >
            <PiTrashFill className={styles.deleteIcon} />
          </Button>
        </div>
        <div className={styles.attribute}>
          <span className={styles.attributeLabel}>Kích thước:</span>
          <span className={styles.attributeValue}>
            {data.attributes[0]}
          </span>
        </div>
        <div className={styles.attribute}>
          <span className={styles.attributeLabel}>Màu sắc:</span>
          <span className={styles.attributeValue}>
            {data.attributes[1]}
          </span>
        </div>
        <div className={styles.footer}>
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
          <CartCounter
            initialValue={data.quantity}
            onAdd={() => dispatch(addToCart({ ...data, quantity: 1 }))}
            onRemove={() =>
              data.quantity === 1
                ? dispatch(
                    remove({
                      id: data.id,
                      attributes: data.attributes,
                      quantity: data.quantity,
                    })
                  )
                : dispatch(
                    removeCartItem({ id: data.id, attributes: data.attributes })
                  )
            }
            isZeroDelete
            className={styles.counter}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
