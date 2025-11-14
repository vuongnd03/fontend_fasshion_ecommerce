import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ProductDetailsContent from "./ProductDetailsContent";
import ReviewsContent from "./ReviewsContent";
import FaqContent from "./FaqContent";
import styles from "./Tabs.module.css";

const tabBtnData = [
  {
    id: 1,
    label: "Chi Tiết Sản Phẩm",
  },
  {
    id: 2,
    label: "Đánh Giá & Nhận Xét",
  },
  {
    id: 3,
    label: "Câu Hỏi Thường Gặp",
  },
];

const Tabs = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className={styles.tabButtons}>
        {tabBtnData.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            type="button"
            className={cn([
              active === tab.id
                ? styles.activeTab
                : styles.inactiveTab,
              styles.tabButton,
            ])}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className={styles.content}>
        {active === 1 && <ProductDetailsContent />}
        {active === 2 && <ReviewsContent />}
        {active === 3 && <FaqContent />}
      </div>
    </div>
  );
};

export default Tabs;

