import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import styles from "./NewsLetterSection.module.css";

const NewsLetterSection = () => {
  return (
    <div className={styles.container}>
      <p className={cn([integralCF.className, styles.title])}>
        CẬP NHẬT CÁC ƯU ĐÃI MỚI NHẤT CỦA CHÚNG TÔI
      </p>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text>
              <img
                src="/icons/envelope.svg"
                height={20}
                width={20}
                alt="email"
                className={styles.icon}
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="email"
              name="email"
              placeholder="Nhập địa chỉ email của bạn"
              className={styles.input}
            />
          </InputGroup>
          <Button
            variant="secondary"
            className={styles.button}
            aria-label="Đăng ký nhận bản tin"
            type="button"
          >
            Đăng Ký Nhận Bản Tin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;

