import { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

export default function useImageChange(name, value, isField) {
  const [selectedImage, setSelectedImage] = useState(value || null);
  const formik = isField ? useFormikContext() : null;

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      if (isField && formik && name) {
        formik.setFieldValue(name, file);
      }
    }
  };

  const handleRemoveImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);

      if (isField && formik && name) {
        formik.setFieldValue(name, null);
      }
    }
  };

  useEffect(() => {
    if (typeof value === 'string') {
      setSelectedImage(value);
    }
  }, [value]);

  return { handleImageChange, handleRemoveImage, selectedImage };
}
