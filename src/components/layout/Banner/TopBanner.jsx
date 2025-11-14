import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styles from "./TopBanner.module.css";

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <p className={styles.text}>
          Đăng ký và nhận giảm 20% cho đơn hàng đầu tiên.{" "}
          <Link to="#" className={styles.link}>
            Đăng Ký Ngay
          </Link>
        </p>
        <Button
          variant="ghost"
          className={styles.closeButton}
          size="icon"
          type="button"
          aria-label="đóng banner"
        >
          <img
            src="/icons/times.svg"
            height={13}
            width={13}
            alt="đóng banner"
          />
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
