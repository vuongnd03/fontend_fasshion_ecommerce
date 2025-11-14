import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./DressStyleSection.module.css";

const dressStylesData = [
  {
    title: "Thường Ngày",
    slug: "/shop?style=casual",
  },
  {
    title: "Công Sở",
    slug: "/shop?style=formal",
  },
  {
    title: "Tiệc Tùng",
    slug: "/shop?style=party",
  },
  {
    title: "Thể Thao",
    slug: "/shop?style=gym",
  },
];

const DressStyleSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className={styles.accordionItem}>
        <AccordionTrigger className={styles.trigger}>
          Phong Cách Trang Phục
        </AccordionTrigger>
        <AccordionContent className={styles.content}>
          <div className={styles.list}>
            {dressStylesData.map((dStyle, idx) => (
              <Link
                key={idx}
                to={dStyle.slug}
                className={styles.link}
              >
                {dStyle.title} <MdKeyboardArrowRight />
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;

