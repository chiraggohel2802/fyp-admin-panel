import { useFormikContext } from 'formik';

export default function useSwitchButton(name, onChange) {
  const formik = useFormikContext();

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (formik) {
      formik.setFieldValue(name, isChecked);
    }
    if (onChange) {
      onChange(isChecked);
    }
  };
  return { handleChange };
}
