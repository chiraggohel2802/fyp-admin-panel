import { object, string } from 'yup';

const useHeroSectionValidationSchema = () => {
  const heroSectionValidationSchema = object().shape({
    title: string().required('Title is required'),
    subtitle: string().required('Subtitle is required'),
    description: string().required('Description is required'),
    image: string().required('Image is required'),
    imageAltText: string().required('Image Alt Text is required'),
    buttonText: string().required('Button Text is required'),
    buttonLink: string().required('Button Link is required'),
  });

  return { heroSectionValidationSchema };
};

export default useHeroSectionValidationSchema;