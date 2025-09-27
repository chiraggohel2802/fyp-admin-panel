import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useTherapist = () => {
  const navigate = useNavigate();
  // Navigate back to the role management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.THERAPIST_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   * @param {string} id - The ID of the role to edit.
   */
  const handleEditTherapist = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.THERAPIST_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  return {
    handleBack,
    handleEditTherapist,
  };
};

export default useTherapist;
