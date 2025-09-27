import { FORM } from 'constants/config.constants';
import { ROLE as ROLE_API } from 'api/apiEndPoints';

export const roleStatusLabels = [
  { status: true, label: 'Active', type: 'Success' },
  { status: false, label: 'Disactive', type: 'Danger' },
];

// role form intialvalues object
export const formIntialValues = {
  name: '',
  description: '',
  permissions: [],
  ...FORM.INITIAL_COMMON_FIELDS,
};

export const roleListConfigurations = {
  api_endpoint: ROLE_API.LIST,
};

export const ROLE = {
  HEADING: 'Role',
  SUB_HEADING: 'App Role List',
  ADD_ROLE_BUTTON_TEXT: 'Add Role',
  TITLE: 'Role Details',
  CANCEL_BUTTON: 'Cancel',
  ADD: {
    BUTTON: 'Add Role',
  },
  FORM: {
    NAME_FIELD_LABEL: 'Name',
    NAME_TEXTFIELD_PLACEHOLDER: 'Enter Name',
    DESCRIPTION_FIELD_LABEL: 'Description',
    DESCRIPTION_TEXTFIELD_PLACEHOLDER: 'Enter Description',
    PERMISSIONS_FIELD_LABEL: 'Permissions',
    PERMISSIONS_TEXTFIELD_PLACEHOLDER: 'Select Permissions',
  },
  EDIT: {
    BUTTON: 'Edit Role',
  },
};
