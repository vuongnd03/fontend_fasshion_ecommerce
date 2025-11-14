import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";
import styles from "./DressStyle.module.css";

const DressStyle = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          BROWSE BY DRESS STYLE
        </motion.h2>

        {/* Row 1 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={styles.row}
        >
          <DressStyleCard
            title="Thường ngày"
            url="/shop#casual"
            className={styles.card1}
          />
          <DressStyleCard
            title="Công sở"
            url="/shop#formal"
            className={styles.card2}
          />
        </motion.div>

        {/* Row 2 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className={styles.row}
        >
          <DressStyleCard
            title="Tiệc tùng"
            url="/shop#party"
            className={styles.card3}
          />
          <DressStyleCard
            title="Thể thao"
            url="/shop#gym"
            className={styles.card4}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
