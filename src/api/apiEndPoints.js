export const AUTH = {
  LOGIN: '/admin-login',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

export const PERMISSION = {
  LIST: '/admin/roles/permissions',
};

export const SEO = {
  LIST: '/seo',
  ADD: '/seo',
  SINGLEDETAIL: '/seo',
  EDIT: '/seo',
};

export const FOOTER_MENU = {
  LIST: '/footer-menu',
  ADD: '/footer-menu',
  SINGLEDETAIL: '/footer-menu',
  EDIT: '/footer-menu',
  DELETE: '/footer-menu',
};

export const THERAPIST = {
  LIST: '/partners/cms-top-therapist',
  SINGLEDETAIL: '/partners',
  EDIT: '/partners',
  CHANGE_TOP_THERAPIST_STATUS: '/partners/:id/change-status-top-therapist',
};

export const SLIDER = {
  LIST: '/slider',
  ADD: '/slider',
  SINGLEDETAIL: '/slider',
  EDIT: '/slider',
  DELETE: '/slider',
};

export const HERO_SECTION = {
  LIST: '/hero-section',
  ADD: '/hero-section',
  SINGLEDETAIL: '/hero-section',
  EDIT: '/hero-section',
  DELETE: '/hero-section',
};

export const SUB_ADMIN = {
  LIST: '/admin/users',
  ADD: '/admin/users/',
  SINGLEDETAIL: '/admin/users/',
  EDIT: '/admin/users/',
  DELETE: '/admin/users/',
  CHANGE_STATUS: '/admin/users/:id/change-status',
};

export const EVENT = {
  LIST: '/admin/events',
  LIST_USERS: '/admin/events/:id/users',
  ADD: '/admin/events/',
  SINGLEDETAIL: '/admin/events/',
  EDIT: '/admin/events/',
  DELETE: '/admin/events/',
  CHANGE_STATUS: '/admin/events/:id/change-status',
  GENERATE_CODE: '/admin/events/generate-password',
  ATTENDANCE_EVENT: '/admin/events/attendance/:eventId/:email',
};
