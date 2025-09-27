import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useHeroSection = () => {
  const navigate = useNavigate();
  
  // Navigate back to the hero section management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit hero section page.
   *
   * @param {string} id - The ID of the hero section to edit.
   */
  const handleEditHeroSection = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  return {
    handleBack,
    handleEditHeroSection,
  };
};

export default useHeroSection;