import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Link } from "react-router-dom";
import React from "react";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import styles from "./TopNavbar.module.css";

const data = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Quần áo Nam",
        url: "/shop#men-clothes",
        description: "Với màu sắc và thiết kế hấp dẫn, ấn tượng",
      },
      {
        id: 12,
        label: "Quần áo Nữ",
        url: "/shop#women-clothes",
        description: "Các quý cô, phong cách và gu thẩm mỹ của bạn rất quan trọng đối với chúng tôi",
      },
      {
        id: 13,
        label: "Quần áo trẻ em",
        url: "/shop#kids-clothes",
        description: "Phù hợp với mọi lứa tuổi, với những gam màu tươi vui và đẹp mắt",
      },
      {
        id: 14,
        label: "Túi & Giày",
        url: "/shop#bag-shoes",
        description: "Phù hợp cho nam, nữ và mọi gu thẩm mỹ, phong cách",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Home",
    url: "/",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  
  {
    id: 4,
    type: "MenuItem",
    label: "Brands",
    url: "/shop#brands",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.mobileMenu}>
            <ResTopNavbar data={data} />
          </div>
          <Link
            to="/"
            className={cn([integralCF.className, styles.logo])}
          >
            TEEZ.LO
          </Link>
        </div>
        <NavigationMenu className={styles.desktopMenu}>
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className={styles.searchInput}>
          <InputGroup.Text>
            <img
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className={styles.searchIcon}
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className={styles.input}
          />
        </InputGroup>
        <div className={styles.actions}>
          <Link to="/search" className={styles.mobileSearch}>
            <img
              src="/icons/search-black.svg"
              alt="search"
              className={styles.searchIconSmall}
            />
          </Link>
          <CartBtn />
          <Link to="/#signin" className={styles.userLink}>
            <img
              src="/icons/user.svg"
              alt="user"
              className={styles.searchIconSmall}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

