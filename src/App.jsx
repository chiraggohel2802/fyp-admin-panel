import { Route, Routes } from 'react-router-dom';
import ROUTES_ENUMS from 'routes/url.enum';
import AdminRoutes from 'routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import { PageLoader, ScrollToTop } from 'components/core';
import { ToastContainer } from 'react-toastify';
import Logout from 'components/logout/Logout';
import React, { Suspense } from 'react';

const App = () => {
  return (
    <ScrollToTop>
      <HelmetProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path={ROUTES_ENUMS.AUTH.INDEX}
              element={<AdminRoutes.AuthComponent.Layout />}
            >
              <Route
                // path={ROUTES_ENUMS.AUTH.LOGIN}
                index
                element={<AdminRoutes.AuthComponent.Login />}
              />
              <Route
                path={ROUTES_ENUMS.AUTH.LOGIN}
                index
                element={<AdminRoutes.AuthComponent.Login />}
              />
              <Route
                path={ROUTES_ENUMS.AUTH.FORGOT_PASSWORD}
                element={<AdminRoutes.AuthComponent.ForgotPasswrd />}
              />
              <Route
                path={ROUTES_ENUMS.AUTH.RESET_PASSWORD}
                element={<AdminRoutes.AuthComponent.ResetPasswrd />}
              />
            </Route>
            <Route element={<AdminRoutes.MasterLayout />}>
              <Route
                path={ROUTES_ENUMS.DASHBOARD.INDEX}
                element={<AdminRoutes.Dashboard />}
              />
              {/* Seo Management Routes */}
              <Route path={ROUTES_ENUMS.SEO_MANAGEMENT.INDEX}>
                <Route index element={<AdminRoutes.SeoManagement.List />} />
                <Route
                  path={ROUTES_ENUMS.SEO_MANAGEMENT.ADD}
                  element={<AdminRoutes.SeoManagement.Add />}
                />
                <Route
                  path={ROUTES_ENUMS.SEO_MANAGEMENT.EDIT}
                  element={<AdminRoutes.SeoManagement.Edit />}
                />
              </Route>
              {/* Slider Management Routes */}
              <Route path={ROUTES_ENUMS.SLIDER_MANAGEMENT.INDEX}>
                <Route index element={<AdminRoutes.SliderManagement.List />} />
                <Route
                  path={ROUTES_ENUMS.SLIDER_MANAGEMENT.ADD}
                  element={<AdminRoutes.SliderManagement.Add />}
                />
                <Route
                  path={ROUTES_ENUMS.SLIDER_MANAGEMENT.EDIT}
                  element={<AdminRoutes.SliderManagement.Edit />}
                />
              </Route>
              {/* Hero section Management Routes */}
              <Route path={ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.INDEX}>
                <Route index element={<AdminRoutes.HeroSectionManagement.List />} />
                <Route
                  path={ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.ADD}
                  element={<AdminRoutes.HeroSectionManagement.Add />}
                />
                <Route
                  path={ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.EDIT}
                  element={<AdminRoutes.HeroSectionManagement.Edit />}
                />
              </Route>
              {/* Top Therapist Management Routes */}
              <Route path={ROUTES_ENUMS.THERAPIST_MANAGEMENT.INDEX}>
                <Route
                  index
                  element={<AdminRoutes.TopTherapistManagement.List />}
                />
                <Route
                  path={ROUTES_ENUMS.THERAPIST_MANAGEMENT.ADD}
                  element={<AdminRoutes.TopTherapistManagement.Add />}
                />
                <Route
                  path={ROUTES_ENUMS.THERAPIST_MANAGEMENT.EDIT}
                  element={<AdminRoutes.TopTherapistManagement.Edit />}
                />
              </Route>
              {/* Footer Management Routes */}
              <Route path={ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.INDEX}>
                <Route
                  index
                  element={<AdminRoutes.FooterManagement.List />}
                />
                <Route
                  path={ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.ADD}
                  element={<AdminRoutes.FooterManagement.Add />}
                />
                <Route
                  path={ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.EDIT}
                  element={<AdminRoutes.FooterManagement.Edit />}
                />
              </Route>
              <Route path={ROUTES_ENUMS.LOGOUT} element={<Logout />} />
            </Route>
            <Route path="/401" element={<AdminRoutes.Unauthorized />} />
            <Route path="*" element={<AdminRoutes.PageNotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </HelmetProvider>
    </ScrollToTop>
  );
};

export default App;
