import { useFormikContext } from 'formik';

export default function useHandleChange(name) {
  const formik = useFormikContext();

  const handleChange = (e) => {
    formik.setFieldValue(name, e || '');
  };
  return { handleChange };
}
