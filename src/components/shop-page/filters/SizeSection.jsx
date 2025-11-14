import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import styles from "./SizeSection.module.css";

const SizeSection = () => {
  const [selected, setSelected] = useState("Lớn");

  const sizes = [
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
    "4XL",
  ];

  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className={styles.accordionItem}>
        <AccordionTrigger className={styles.trigger}>
          Kích Thước
        </AccordionTrigger>
        <AccordionContent className={styles.content}>
          <div className={styles.sizes}>
            {sizes.map((size, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  styles.sizeButton,
                  selected === size && styles.sizeButtonActive,
                ])}
                onClick={() => setSelected(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;

