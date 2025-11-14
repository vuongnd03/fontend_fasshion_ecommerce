import { useLocation } from "react-router-dom";
import React from "react";
import styles from "./LayoutSpacing.module.css";

const LayoutSpacing = () => {
  const location = useLocation();

  if (!location.pathname.includes("product")) return null;

  return <div className={styles.spacing} />;
};

export default LayoutSpacing;

