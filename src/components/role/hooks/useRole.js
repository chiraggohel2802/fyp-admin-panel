import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useRole = () => {
  const navigate = useNavigate();
  // Navigate back to the role management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.USER_MANAGEMENT.ROLE_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   * @param {string} id - The ID of the role to edit.
   */
  const handleEditRole = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.USER_MANAGEMENT.ROLE_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   */
  const handleAddRole = () => {
    navigate(ROUTES_ENUMS.USER_MANAGEMENT.ROLE_MANAGEMENT.ADD);
  };

  return {
    handleBack,
    handleEditRole,
    handleAddRole,
  };
};

export default useRole;
