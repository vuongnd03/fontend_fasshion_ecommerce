import React from "react";
import { Link } from "react-router-dom";
import styles from "./DressStyleCard.module.css";

const DressStyleCard = ({ title, url, className }) => {
  return (
    <Link
      to={url}
      className={`${styles.card} ${className}`}
    >
      {title}
    </Link>
  );
};

export default DressStyleCard;
