import { lazy } from 'react';

const HeroSection = {
  List: lazy(() => import('./components/list/List')),
  Edit: lazy(() => import('./components/edit/Edit')),
};

export default HeroSection;