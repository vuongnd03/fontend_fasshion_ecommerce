import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import BreadcrumbShop from "../components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import MobileFilters from "../components/shop-page/filters/MobileFilters";
import Filters from "../components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "./HomePage";
import ProductCard from "../components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import styles from "./ShopPage.module.css";

const allProducts = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

const styleMap = {
  casual: "Thường Ngày",
  formal: "Công Sở",
  party: "Tiệc Tùng",
  gym: "Thể Thao",
};

function ShopPage() {
  const [searchParams] = useSearchParams();
  const style = searchParams.get("style");
  const category = searchParams.get("category");

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by style
    if (style) {
      // For now, we'll show all products when a style is selected
      // In a real app, products would have a style property
      products = products;
    }

    // Filter by category
    if (category) {
      // For now, we'll show all products when a category is selected
      // In a real app, products would have a category property
      products = products;
    }

    return products;
  }, [style, category]);

  const pageTitle = style ? styleMap[style] || "Cửa Hàng" : "Cửa Hàng";
  const productCount = filteredProducts.length;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <BreadcrumbShop />
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.filtersHeader}>
              <span className={styles.filtersTitle}>Bộ Lọc</span>
              <FiSliders className={styles.filtersIcon} />
            </div>
            <Filters />
          </div>
          <div className={styles.productsSection}>
            <div className={styles.header}>
              <div className={styles.titleSection}>
                <h1 className={styles.title}>{pageTitle}</h1>
                <MobileFilters />
              </div>
              <div className={styles.controls}>
                <span className={styles.productCount}>
                  Hiển thị 1-{Math.min(10, productCount)} trong {productCount} sản phẩm
                </span>
                <div className={styles.sortSection}>
                  Sắp xếp theo:{" "}
                  <Select defaultValue="most-popular">
                    <SelectTrigger className={styles.selectTrigger}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Phổ Biến Nhất</SelectItem>
                      <SelectItem value="low-price">Giá Thấp</SelectItem>
                      <SelectItem value="high-price">Giá Cao</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <>
                <div className={styles.productsGrid}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
                <hr className={styles.divider} />
                <Pagination className={styles.pagination}>
                  <PaginationPrevious href="#" className={styles.paginationButton} />
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                        isActive
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={styles.hiddenLg}>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis className={styles.paginationLink} />
                    </PaginationItem>
                    <PaginationItem className={styles.hiddenLg}>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                      >
                        8
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className={styles.hiddenSm}>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                      >
                        9
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className={styles.paginationLink}
                      >
                        10
                      </PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                  <PaginationNext href="#" className={styles.paginationButton} />
                </Pagination>
              </>
            ) : (
              <div className={styles.emptyState}>
                <p>Không tìm thấy sản phẩm nào.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShopPage;
