import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import styles from "./LinksSection.module.css";

const footerLinksData = [
  {
    id: 1,
    title: "công ty",
    children: [
      {
        id: 11,
        label: "giới thiệu",
        url: "#",
      },
      {
        id: 12,
        label: "tính năng",
        url: "#",
      },
      {
        id: 13,
        label: "công việc",
        url: "#",
      },
      {
        id: 14,
        label: "tuyển dụng",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "trợ giúp",
    children: [
      {
        id: 21,
        label: "hỗ trợ khách hàng",
        url: "#",
      },
      {
        id: 22,
        label: "chi tiết giao hàng",
        url: "#",
      },
      {
        id: 23,
        label: "điều khoản & điều kiện",
        url: "#",
      },
      {
        id: 24,
        label: "chính sách bảo mật",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "câu hỏi thường gặp",
    children: [
      {
        id: 31,
        label: "tài khoản",
        url: "#",
      },
      {
        id: 32,
        label: "quản lý giao hàng",
        url: "#",
      },
      {
        id: 33,
        label: "đơn hàng",
        url: "#",
      },
      {
        id: 34,
        label: "thanh toán",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "tài nguyên",
    children: [
      {
        id: 41,
        label: "Sách điện tử miễn phí",
        url: "#",
      },
      {
        id: 42,
        label: "hướng dẫn phát triển",
        url: "#",
      },
      {
        id: 43,
        label: "Blog Hướng dẫn",
        url: "#",
      },
      {
        id: 44,
        label: "danh sách phát youtube",
        url: "#",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className={styles.section} key={item.id}>
          <h3 className={styles.title}>
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              to={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && styles.capitalize,
                styles.link,
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;

