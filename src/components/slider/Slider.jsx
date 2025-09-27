import { lazy } from 'react';

const Slider = {
  List: lazy(() => import('./components/list/List')),
  Add: lazy(() => import('./components/add/Add')),
  Edit: lazy(() => import('./components/edit/Edit')),
};

export default Slider;
