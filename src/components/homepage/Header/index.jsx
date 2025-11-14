import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Link } from "react-router-dom";
import React from "react";
import * as motion from "framer-motion/client";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <section className={styles.contentSection}>
          <motion.h2
            initial={{ y: "100px", opacity: 0, rotate: 10 }}
            whileInView={{ y: "0", opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([integralCF.className, styles.title])}
          >
            TÌM QUẦN ÁO PHÙ HỢP VỚI PHONG CÁCH CỦA BẠN
          </motion.h2>
          <motion.p
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={styles.description}
          >
            Duyệt qua bộ sưu tập đa dạng các sản phẩm may mặc được chế tác tỉ mỉ,
            được thiết kế để thể hiện cá tính và phù hợp với phong cách của bạn.
          </motion.p>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              to="/shop"
              className={styles.shopButton}
            >
              Mua Ngay
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className={styles.statsContainer}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter from={0} to={200} />+
              </span>
              <span className={styles.statLabel}>
                Thương Hiệu Quốc Tế
              </span>
            </div>
            <Separator
              className={styles.separator}
              orientation="vertical"
            />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter from={0} to={2000} />+
              </span>
              <span className={styles.statLabel}>
                Sản Phẩm Chất Lượng
              </span>
            </div>
            <Separator
              className={styles.separatorHidden}
              orientation="vertical"
            />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter from={0} to={3000} />+
              </span>
              <span className={styles.statLabel}>
                Khách Hàng Hài Lòng
              </span>
            </div>
          </motion.div>
        </section>
        <motion.section
          initial={{ y: "100px", opacity: 0, rotate: 10 }}
          whileInView={{ y: "0", opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className={styles.imageSection}
        >
          <img
            src="/icons/big-star.svg"
            alt="ngôi sao lớn"
            className={styles.bigStar}
          />
          <img
            src="/icons/small-star.svg"
            alt="ngôi sao nhỏ"
            className={styles.smallStar}
          />
        </motion.section>
      </div>
    </header>
  );
};

export default Header;

