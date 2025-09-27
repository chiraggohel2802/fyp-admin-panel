import { object, string } from 'yup';

export default function useSeoValidationSchema() {
  const seoValidationSchema = object().shape({
    metaTitle: string().required('Meta Title is required'),
    metaDescription: string().required('Meta Description is required'),
    metaKeywords: string().required('Meta Keywords are required'),
    canonicalLink: string().required('Canonical Link is required'),
    pageLink: string().required('Page Link is required'),
  });

  return { seoValidationSchema };
}
