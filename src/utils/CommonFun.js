const GenerateRoute = (route, dynamic_data) => {
  let routeString = route;
  Object.keys(dynamic_data).forEach((element) => {
    routeString = routeString.replace(element, dynamic_data[element]);
  });
  return routeString;
};

const GetFormValues = (source, target) => {
  if (typeof source !== 'undefined') {
    for (const key in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(key) && target.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
    return target;
  }
  return undefined;
};

export { GenerateRoute, GetFormValues };
