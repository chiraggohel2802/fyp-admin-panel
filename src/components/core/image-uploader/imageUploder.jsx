import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageUploder.module.css';
import noImage from 'assets/images/default-image.png';
import useImageChange from './hooks/useImageChange';
import Error from '../error/Error';

const ImageUpload = (props) => {
  const {
    name,
    value,
    error,
    isField = false,
    buttonLabel,
    defaultImage = noImage,
  } = props;

  const { selectedImage, handleRemoveImage, handleImageChange } =
    useImageChange(name, value, isField);

  return (
    <React.Fragment>
      <div className={styles.imageUploadContainer}>
        {selectedImage ? (
          <div className={styles?.imagePreviewContainer}>
            <img
              src={selectedImage}
              alt="Uploaded"
              className={styles?.imagePreview}
            />
            {isField && (
              <button
                onClick={handleRemoveImage}
                className={styles?.removeButton}
              >
                ✕
              </button>
            )}
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
        {isField && (
          <label className={styles?.imageUploadLabel}>
            <input
              type="file"
              accept="image/*"
              name={name}
              onChange={handleImageChange}
              multiple={false}
            />
            {buttonLabel}
          </label>
        )}
      </div>
      <div>{error && <Error error={error} />}</div>
    </React.Fragment>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  error: PropTypes.string,
  isField: PropTypes.bool,
  buttonLabel: PropTypes.string.isRequired,
  defaultImage: PropTypes.string,
};

export default ImageUpload;
