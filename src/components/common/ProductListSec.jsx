import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import styles from "./ProductListSec.module.css";

const ProductListSec = ({ title, data, viewAllLink }) => {
  return (
    <section className={styles.section}>
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([integralCF.className, styles.title])}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className={styles.carousel}
        >
          <CarouselContent className={styles.carouselContent}>
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className={styles.carouselItem}
              >
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {viewAllLink && (
          <div className={styles.viewAllContainer}>
            <Link
              to={viewAllLink}
              className={styles.viewAllLink}
            >
              Xem Tất Cả
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;

