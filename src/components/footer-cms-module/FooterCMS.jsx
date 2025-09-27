import { lazy } from 'react';

const FooterCMS = {
  List: lazy(() => import('./components/list/List')),
  Add: lazy(() => import('./components/add/Add')),
  Edit: lazy(() => import('./components/edit/Edit')),
};

export default FooterCMS;
