import { lazy } from 'react';

const Seo = {
  List: lazy(() => import('./components/list/List')),
  Edit: lazy(() => import('./components/edit/Edit')),
};

export default Seo;
