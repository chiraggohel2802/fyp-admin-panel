import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useFooterCMS = () => {
  const navigate = useNavigate();
  // Navigate back to the role management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   * @param {string} id - The ID of the role to edit.
   */
  const handleEditFooterCms = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   */
  const handleAddFooterCms = () => {
    navigate(ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.ADD);
  };

  return {
    handleBack,
    handleEditFooterCms,
    handleAddFooterCms,
  };
};

export default useFooterCMS;
