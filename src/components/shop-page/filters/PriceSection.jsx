import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import styles from "./PriceSection.module.css";

const PriceSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-price">
      <AccordionItem value="filter-price" className={styles.accordionItem}>
        <AccordionTrigger className={styles.trigger}>
          Giá
        </AccordionTrigger>
        <AccordionContent className={styles.content}>
          <Slider
            defaultValue={[1200000, 4800000]}
            min={0}
            max={6000000}
            step={100000}
            label="VND"
          />
          <div className={styles.spacer} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceSection;

