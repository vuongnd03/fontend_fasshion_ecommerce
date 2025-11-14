import React, { useState } from "react";
import styles from "./PhotoSection.module.css";

const PhotoSection = ({ data }) => {
  const [selected, setSelected] = useState(data.srcUrl);

  return (
    <div className={styles.container}>
      {data?.gallery && data.gallery.length > 0 && (
        <div className={styles.gallery}>
          {data.gallery.map((photo, index) => (
            <button
              key={index}
              type="button"
              className={styles.thumbnail}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo}
                className={styles.thumbnailImage}
                alt={data.title}
              />
            </button>
          ))}
        </div>
      )}

      <div className={styles.mainImageContainer}>
        <img
          src={selected}
          className={styles.mainImage}
          alt={data.title}
        />
      </div>
    </div>
  );
};

export default PhotoSection;

