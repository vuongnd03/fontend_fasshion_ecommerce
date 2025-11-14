import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinksSection from "./LinksSection";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";
import styles from "./Footer.module.css";

const socialsData = [
  {
    id: 1,
    icon: <FaTwitter />,
    url: "https://twitter.com",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    url: "https://facebook.com",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://instagram.com",
  },
  {
    id: 4,
    icon: <FaGithub />,
    url: "https://github.com/NafisRayan",
  },
];

const paymentBadgesData = [
  {
    id: 1,
    srcUrl: "/icons/Visa.svg",
  },
  {
    id: 2,
    srcUrl: "/icons/mastercard.svg",
  },
  {
    id: 3,
    srcUrl: "/icons/paypal.svg",
  },
  {
    id: 4,
    srcUrl: "/icons/applePay.svg",
  },
  {
    id: 5,
    srcUrl: "/icons/googlePay.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.background}></div>
        <div className={styles.newsletterContainer}>
          <NewsLetterSection />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.brandSection}>
              <h1 className={cn([integralCF.className, styles.brandTitle])}>
                TEEZ.LO
              </h1>
              <p className={styles.brandDescription}>
                Chúng tôi có quần áo phù hợp với phong cách của bạn và bạn tự hào khi mặc.
                Từ nữ đến nam.
              </p>
              <div className={styles.socialLinks}>
                {socialsData.map((social) => (
                  <Link
                    to={social.url}
                    key={social.id}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.linksSectionDesktop}>
              <LinksSection />
            </div>
            <div className={styles.linksSectionMobile}>
              <LinksSection />
            </div>
          </nav>

          <hr className={styles.divider} />
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              TEEZ.LO © Được tạo bởi{" "}
              <Link
                to="https://github.com/NafisRayan"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohammad Oftadeh
              </Link>
              {", "}
              Thiết kế bởi{" "}
              <Link
                to="https://www.figma.com/@hamzauix"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hamza Naeem
              </Link>
            </p>
            <div className={styles.paymentBadges}>
              {paymentBadgesData.map((badge, index, arr) => (
                <span
                  key={badge.id}
                  className={cn([
                    index !== arr.length - 1 && styles.badgeMargin,
                    styles.badge,
                  ])}
                >
                  <img
                    src={badge.srcUrl}
                    alt="phương thức thanh toán"
                    className={styles.badgeImage}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;

