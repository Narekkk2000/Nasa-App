import React from 'react';
import styles from './image.module.css';

const SharedImage = ({ src, alt }) => {
    return <img src={src} alt={alt} className={styles.shared_img} />;
};

export default SharedImage;
