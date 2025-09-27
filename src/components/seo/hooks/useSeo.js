import { useNavigate } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import { GenerateRoute } from 'utils/CommonFun';

const useSeo = () => {
  const navigate = useNavigate();
  // Navigate back to the role management page.
  const handleBack = () => {
    navigate(ROUTES_ENUMS.SEO_MANAGEMENT.INDEX);
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   * @param {string} id - The ID of the role to edit.
   */
  const handleEditSeo = (id) => {
    navigate(
      GenerateRoute(ROUTES_ENUMS.SEO_MANAGEMENT.EDIT, {
        ':id': id,
      })
    );
  };

  /**
   * Function to handle navigating to the edit role page.
   *
   */
  const handleAddSeo = () => {
    navigate(ROUTES_ENUMS.SEO_MANAGEMENT.ADD);
  };

  return {
    handleBack,
    handleEditSeo,
    handleAddSeo,
  };
};

export default useSeo;
