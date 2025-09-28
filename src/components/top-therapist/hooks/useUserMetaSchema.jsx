import { object, string } from 'yup';

export default function useUserMetaSchema() {
  const userMetaValidationSchema = object().shape({
    sequence: string().nullable(),
  });

  return { userMetaValidationSchema };
}
