import { object, string } from 'yup';

export default function useUserMetaSchema() {
  const userMetaValidationSchema = object().shape({
    sequence: string().required('Sequence is required'),
  });

  return { userMetaValidationSchema };
}
