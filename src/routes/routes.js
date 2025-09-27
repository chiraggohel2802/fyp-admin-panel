import { lazy } from 'react';
import PageNotFound from '../components/404/Page404';
import Unauthorized from '../components/401/Page401';
import MasterLayout from '../components/layout/MasterPage';
import * as SeoManagement from 'components/seo';
import * as SliderManagement from 'components/slider';
import * as HeroSectionManagement from 'components/hero-sections';
import * as TopTherapistManagement from 'components/top-therapist';
import * as FooterManagement from 'components/footer-cms-module';

const AuthComponent = {
  Layout: lazy(() => import('../components/auth/layout/Layout')),
  Login: lazy(() => import('../components/auth/login/Login')),
  ForgotPasswrd: lazy(() =>
    import('../components/auth/forgot-password/ForgotPassword')
  ),
  ResetPasswrd: lazy(() =>
    import('../components/auth/reset-password/ResetPassword')
  ),
};

const Dashboard = lazy(() => import('../components/dashboard/Dashboard'));

const AppRouteManagement = {
  Dashboard,
  AuthComponent,
  PageNotFound,
  Unauthorized,
  MasterLayout,
  SeoManagement: SeoManagement.Seo,
  SliderManagement: SliderManagement.Slider,
  HeroSectionManagement: HeroSectionManagement.HeroSection,
  TopTherapistManagement: TopTherapistManagement.TopTherapist,
  FooterManagement: FooterManagement.FooterCMS,
};

export default AppRouteManagement;
