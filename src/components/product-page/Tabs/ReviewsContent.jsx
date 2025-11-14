import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "@/components/common/ReviewCard";
import { reviewsData } from "@/pages/HomePage";
import { Link } from "react-router-dom";
import styles from "./ReviewsContent.module.css";

const ReviewsContent = () => {
  return (
    <section>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>
            Tất Cả Đánh Giá
          </h3>
          <span className={styles.count}>(451)</span>
        </div>
        <div className={styles.controls}>
          <Select defaultValue="latest">
            <SelectTrigger className={styles.select}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Mới Nhất</SelectItem>
              <SelectItem value="most-relevant">Liên Quan Nhất</SelectItem>
              <SelectItem value="oldest">Cũ Nhất</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className={styles.reviewButton}
          >
            Viết Đánh Giá
          </Button>
        </div>
      </div>
      <div className={styles.grid}>
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} data={review} isAction isDate />
        ))}
      </div>
      <div className={styles.loadMoreContainer}>
        <Link
          to="#"
          className={styles.loadMoreLink}
        >
          Tải Thêm Đánh Giá
        </Link>
      </div>
    </section>
  );
};

export default ReviewsContent;

