import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiSliders } from "react-icons/fi";
import Filters from ".";
import styles from "./MobileFilters.module.css";

const MobileFilters = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <button
            type="button"
            className={styles.triggerButton}
          >
            <FiSliders className={styles.icon} />
          </button>
        </DrawerTrigger>
        <DrawerContent className={styles.content}>
          <DrawerHeader>
            <div className={styles.header}>
              <span className={styles.title}>Bộ Lọc</span>
              <FiSliders className={styles.headerIcon} />
            </div>
            <DrawerTitle className={styles.hidden}>bộ lọc</DrawerTitle>
            <DrawerDescription className={styles.hidden}>bộ lọc</DrawerDescription>
          </DrawerHeader>
          <div className={styles.filtersContainer}>
            <Filters />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilters;

