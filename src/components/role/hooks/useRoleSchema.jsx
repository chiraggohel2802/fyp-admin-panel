import { getErrors } from 'constants/errors.constants';
import { object, string, array, boolean } from 'yup';

/**
 * Custom hook to create and return the validation schema for the Add Role form.
 * Utilizes Yup for schema validation.
 *
 * @returns {Object} An object containing the validation schema for adding a role.
 */
export default function useRoleValidationSchema() {
  const { ERRORS } = getErrors();

  // Define the validation schema for adding a role
  const roleValidationSchema = object().shape({
    name: string().required(ERRORS.REQUIRED), // Name field is required
    description: string().required(ERRORS.REQUIRED), // Description field is required
    permissions: array()
      .of(
        object().shape({
          label: string().required(), // Each permission must have a label
          value: string().required(), // Each permission must have a value
        })
      )
      .min(1, ERRORS.REQUIRED) // At least one permission is required
      .required(ERRORS.REQUIRED), // Permissions field is required
    status: boolean(), // Status field is a boolean
  });

  return { roleValidationSchema };
}
