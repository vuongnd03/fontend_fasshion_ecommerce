import React from "react";
import { Link } from "react-router-dom";
import BreadcrumbCart from "../components/cart-page/BreadcrumbCart";
import ProductCard from "../components/cart-page/ProductCard";
import { Button } from "../components/ui/button";
import InputGroup from "../components/ui/input-group";
import { cn, formatPrice, formatVND } from "../lib/utils";
import { integralCF } from "../styles/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TbBasketExclamation } from "react-icons/tb";
import { useAppSelector } from "../lib/hooks/redux";
import styles from "./CartPage.module.css";

function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state) => state.carts
  );

  const discountAmount = totalPrice - adjustedTotalPrice;
  const discountPercentage = totalPrice > 0 
    ? Math.round((discountAmount / totalPrice) * 100) 
    : 0;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {cart && cart.items.length > 0 ? (
          <>
            <BreadcrumbCart />
            <h2 className={cn([integralCF.className, styles.title])}>
              giỏ hàng của bạn
            </h2>
            <div className={styles.content}>
              <div className={styles.cartItems}>
                {cart?.items.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && (
                      <hr className={styles.divider} />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.summary}>
                <h6 className={styles.summaryTitle}>Tóm Tắt Đơn Hàng</h6>
                <div className={styles.summaryContent}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Tạm tính</span>
                    <span className={styles.summaryValue}>
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>
                      Giảm giá (-{discountPercentage}%)
                    </span>
                    <span className={styles.discountValue}>
                      -{formatPrice(discountAmount)}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Phí vận chuyển</span>
                    <span className={styles.summaryValue}>Miễn phí</span>
                  </div>
                  <hr className={styles.divider} />
                  <div className={styles.summaryRow}>
                    <span className={styles.totalLabel}>Tổng cộng</span>
                    <span className={styles.totalValue}>
                      {formatPrice(adjustedTotalPrice)}
                    </span>
                  </div>
                </div>
                <div className={styles.promoSection}>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroup.Text>
                      <MdOutlineLocalOffer className={styles.offerIcon} />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="code"
                      placeholder="Nhập mã giảm giá"
                      className={styles.input}
                    />
                  </InputGroup>
                  <Button
                    type="button"
                    className={styles.applyButton}
                  >
                    Áp dụng
                  </Button>
                </div>
                <Button
                  type="button"
                  className={styles.checkoutButton}
                >
                  Thanh Toán{" "}
                  <FaArrowRight className={styles.arrowIcon} />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.emptyCart}>
            <TbBasketExclamation strokeWidth={1} className={styles.emptyIcon} />
            <span className={styles.emptyText}>
              Giỏ hàng của bạn đang trống.
            </span>
            <Button className={styles.shopButton} asChild>
              <Link to="/shop">Mua Sắm</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;

