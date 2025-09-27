const ROUTES_ENUMS = {
  AUTH: {
    INDEX: '/',
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  DASHBOARD: {
    INDEX: '/admin/dashboard',
  },
  SEO_MANAGEMENT: {
    INDEX: '/admin/seo-management',
    ADD: '/admin/seo-management/add',
    EDIT: '/admin/seo-management/edit/:id',
  },
  FOOTER_CMS_MANAGEMENT: {
    INDEX: '/admin/footer-cms-management',
    ADD: '/admin/footer-cms-management/add',
    EDIT: '/admin/footer-cms-management/edit/:id',
  },
  THERAPIST_MANAGEMENT: {
    INDEX: '/admin/top-therapist-management',
    ADD: '/admin/top-therapist-management/add',
    EDIT: '/admin/top-therapist-management/edit/:id',
  },
  SLIDER_MANAGEMENT: {
    INDEX: '/admin/slider-management',
    ADD: '/admin/slider-management/add',
    EDIT: '/admin/slider-management/edit/:id',
  },
  HERO_SECTION_MANAGEMENT: {
    INDEX: '/admin/hero-section-management',
    ADD: '/admin/hero-section-management/add',
    EDIT: '/admin/hero-section-management/edit/:id',
  },
  USER_MANAGEMENT: {
    INDEX: '/admin/user-management',
    SUB_ADMIN: {
      INDEX: '/admin/user-management/sub-admin',
      ADD: '/admin/user-management/sub-admin/add',
      EDIT: '/admin/user-management/sub-admin/edit/:id',
    },
    ROLE_MANAGEMENT: {
      INDEX: '/admin/user-management/role-management',
      ADD: '/admin/user-management/role-management/add',
      EDIT: '/admin/user-management/role-management/edit/:id',
    },
  },
  EVENT_MANAGEMENT: {
    INDEX: '/admin/event-management',
    EVENT: {
      INDEX: '/admin/event-management',
      ADD: '/admin/event-management/add',
      EDIT: '/admin/event-management/edit/:id',
      EVENT_USERS: '/admin/event-management/users/:id',
    },
  },
  404: '/404',
  401: '/401',
  LOGOUT: '/logout',
};
export default ROUTES_ENUMS;
