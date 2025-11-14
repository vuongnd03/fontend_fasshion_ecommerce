import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <>
      <hr className={styles.divider} />
      <CategoriesSection />
      <hr className={styles.divider} />
      <PriceSection />
      <hr className={styles.divider} />
      <ColorsSection />
      <hr className={styles.divider} />
      <SizeSection />
      <hr className={styles.divider} />
      <DressStyleSection />
      <Button
        type="button"
        className={styles.applyButton}
      >
        Áp Dụng Bộ Lọc
      </Button>
    </>
  );
};

export default Filters;

