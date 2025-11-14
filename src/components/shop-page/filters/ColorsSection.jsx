import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import styles from "./ColorsSection.module.css";

const ColorsSection = () => {
  const [selected, setSelected] = useState("bg-green-600");

  const colors = [
    "bg-green-600",
    "bg-red-600",
    "bg-yellow-300",
    "bg-orange-600",
    "bg-cyan-400",
    "bg-blue-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-white",
    "bg-black",
  ];

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className={styles.accordionItem}>
        <AccordionTrigger className={styles.trigger}>
          Màu Sắc
        </AccordionTrigger>
        <AccordionContent className={styles.content}>
          <div className={styles.colorsGrid}>
            {colors.map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color,
                  styles.colorButton,
                ])}
                onClick={() => setSelected(color)}
              >
                {selected === color && (
                  <IoMdCheckmark className={styles.checkIcon} />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;

