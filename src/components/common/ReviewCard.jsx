import React from "react";
import Rating from "../ui/Rating";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { cn } from "@/lib/utils";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({
  blurChild,
  isAction = false,
  isDate = false,
  data,
  className,
}) => {
  return (
    <div className={cn([styles.card, className])}>
      {blurChild && blurChild}
      <div className={styles.header}>
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          size={23}
          readonly
        />
        {isAction && (
          <Button variant="ghost" size="icon">
            <IoEllipsisHorizontal className={styles.actionIcon} />
          </Button>
        )}
      </div>
      <div className={styles.userContainer}>
        <strong className={styles.userName}>{data.user}</strong>
        <IoIosCheckmarkCircle className={styles.checkIcon} />
      </div>
      <p className={styles.content}>{data.content}</p>
      {isDate && (
        <p className={styles.date}>
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

export default ReviewCard;

