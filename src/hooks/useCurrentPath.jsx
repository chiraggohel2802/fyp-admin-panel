import { useLocation } from 'react-router-dom';

export default function useCurrentPath() {
  const { pathname, search } = useLocation();

  // creating current page path with query params
  const currentPath = pathname + search;

  return { currentPath };
}
