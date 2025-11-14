import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import ReviewCard from "@/components/common/ReviewCard";
import styles from "./Reviews.module.css";

const Reviews = ({ data }) => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!isClient) return null;

  return (
    <section className={styles.section}>
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className={styles.carousel}
        >
          <div className={styles.header}>
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={cn([integralCF.className, styles.title])}
            >
              KHÁCH HÀNG HÀI LÒNG CỦA CHÚNG TÔI
            </motion.h2>
            <div className={styles.controls}>
              <CarouselPrevious variant="ghost" className={styles.controlButton}>
                <FaArrowLeft />
              </CarouselPrevious>
              <CarouselNext variant="ghost" className={styles.controlButton}>
                <FaArrowRight />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent>
            {data.map((review, index) => (
              <CarouselItem
                key={review.id}
                className={styles.carouselItem}
              >
                <ReviewCard
                  className={styles.reviewCard}
                  data={review}
                  blurChild={
                    data.length >= 6 && (
                      <div
                        className={cn([
                          isDesktop
                            ? (current + 1 === count
                                ? 0
                                : current + 1 > count
                                ? 1
                                : current + 1) === index &&
                              styles.blur
                            : (current === count ? 0 : current) === index &&
                              styles.blur,
                          isDesktop
                            ? (current === 1
                                ? count - 2
                                : current === 2
                                ? count - 1
                                : current - 3) === index &&
                              styles.blur
                            : (current === 1
                                ? count - 1
                                : current === 2
                                ? 0
                                : current - 2) === index &&
                              styles.blur,
                          styles.blurOverlay,
                        ])}
                      />
                    )
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Reviews;

