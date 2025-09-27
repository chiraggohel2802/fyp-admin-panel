import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useSlider = () => {
  const navigate = useNavigate();
  // Navigate back to the role management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.SLIDER_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   * @param {string} id - The ID of the role to edit.
   */
  const handleEditSlider = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.SLIDER_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   */
  const handleAddSlider = () => {
    navigate(ROUTES_ENUMS.SLIDER_MANAGEMENT.ADD);
  };

  return {
    handleBack,
    handleEditSlider,
    handleAddSlider,
  };
};

export default useSlider;
