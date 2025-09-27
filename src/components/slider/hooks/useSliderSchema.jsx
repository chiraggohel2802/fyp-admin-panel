import { object, string, number } from 'yup';

const useSliderValidationSchema = () => {
  const sliderValidationSchema = object().shape({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
    image: string().nullable(),
    backgroundImage: string().nullable(),
    buttonText: string().required('Button Text is required'),
    buttonLink: string().required('Button Link is required'),
    sequenceNo: number().required('Sequence No is required'),
  });

  return { sliderValidationSchema };
};

export default useSliderValidationSchema;
