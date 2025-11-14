import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./ResTopNavbar.module.css";

const ResTopNavbar = ({ data }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={styles.trigger}>
        <img
          src="/icons/menu.svg"
          alt="menu"
          className={styles.menuIcon}
        />
      </SheetTrigger>
      <SheetContent side="left" className={styles.content}>
        <SheetHeader className={styles.header}>
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link to="/" className={cn([integralCF.className, styles.logo])}>
                TEEZ.LO
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className={styles.menu}>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link to={item.url ?? "/"} className={styles.menuItem}>
                    {item.label}
                  </Link>
                </SheetClose>
              )}
              {item.type === "MenuList" && (
                <div className={styles.menuListContainer}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label} className={styles.accordionItem}>
                      <AccordionTrigger className={styles.accordionTrigger}>
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className={styles.accordionContent}>
                        {item.children.map((itemChild) => (
                          <SheetClose
                            key={itemChild.id}
                            asChild
                            className={styles.childLink}
                          >
                            <Link to={itemChild.url ?? "/"}>
                              {itemChild.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;

