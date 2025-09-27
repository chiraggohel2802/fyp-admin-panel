const TABLE = {
  PER_PAGE_OPTIONS: [
    { value: 10, label: '10 / Page' },
    { value: 20, label: '20 / Page' },
    { value: 50, label: '50 / Page' },
    { value: 100, label: '100 / Page' },
  ],
  LIST_CUSTOM_STYLE: {
    width: 'inherit',
  },
  LIST_DATA_STYLE: {
    fontSize: '0.9rem',
  },
  LIST_COMMON_COLUMN: [{ key: 'createdAt', title: 'Created On' }],
};

const FORM = {
  TEXT_FIELD_SUFFIX_CUSTOM_STYLE: {
    height: 'inherit',
  },
  DROPDOWN_MENU_ITEM_STYLE: {
    display: 'grid',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    gridTemplateColumns: 'auto auto auto auto',
  },
  INITIAL_COMMON_FIELDS: {
    status: true,
  },
};

const DAY_LIST = [
  { label: 'Sunday', value: 'Sunday' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
];

const STATUS_LABEL_OPTIONS = [
  { status: true, label: 'True', type: 'Success' },
  { status: false, label: 'False', type: 'Danger' },
];

const PERMISSIONS = {
  DASHBOARD: 'DASHBOARD',
  USER_MANAGEMENT: {
    USER: {
      READ: 'USER_READ',
      CREATE: 'USER_CREATE',
      UPDATE: 'USER_UPDATE',
      DELETE: 'USER_DELETE',
    },
    ROLE: {
      READ: 'ROLE_READ',
      CREATE: 'ROLE_CREATE',
      UPDATE: 'ROLE_UPDATE',
      DELETE: 'ROLE_DELETE',
    },
  },
  EVENT_MANAGEMENT: {
    EVENT: {
      READ: 'EVENT_READ',
      CREATE: 'EVENT_CREATE',
      UPDATE: 'EVENT_UPDATE',
      DELETE: 'EVENT_DELETE',
      CODE_COPY: 'EVENT_CODE_COPY',
      ATTENDENCE: 'EVENT_ATTENDENCE',
      USERS: 'EVENT_USERS_READ',
      USER_EXPORT: 'EVENT_USERS_EXPORT',
    },
  },
};

export { TABLE, FORM, DAY_LIST, STATUS_LABEL_OPTIONS, PERMISSIONS };
