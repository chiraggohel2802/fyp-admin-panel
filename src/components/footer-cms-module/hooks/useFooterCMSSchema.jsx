import { number, object, string } from 'yup';

export default function useFooterCMSSchema() {
  const footerCmsValidationSchema = object().shape({
    title: string().required('Title is required'),
    url_link: string(),
    category: number().required('Category is required'),
  });

  return { footerCmsValidationSchema };
}
