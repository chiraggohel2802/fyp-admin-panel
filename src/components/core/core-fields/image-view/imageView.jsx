import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './imageUploder.module.css';
import noImage from 'assets/images/default-profile.png';

const ImageView = (props) => {
  const { image, defaultImage = noImage } = props;

  return (
    <React.Fragment>
      {image ? (
        <div className={styles?.imagePreviewContainer}>
          <img src={image} alt="Uploaded" className={styles?.imagePreview} />
        </div>
      ) : (
        <div className={styles?.imagePreviewContainer}>
          <img
            src={defaultImage}
            alt="alt-data"
            className={styles.imagePreview}
          />
        </div>
      )}
    </React.Fragment>
  );
};

ImageView.propTypes = {
  image: PropTypes.string,
  defaultImage: PropTypes.string,
};

export default memo(ImageView);
