import Api from './axios';

const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

function generateHeaders(params) {
  let payload = {};
  if (params) payload.params = params;
  payload.credentials = 'include';
  return payload;
}

const getRequest = (url, params) => {
  return handleRequest(Api.get(url, generateHeaders(params)));
};

const postRequest = (url, payload, headers) => {
  return handleRequest(Api.post(url, payload, headers));
};

const patchRequest = (url, payload) => {
  return handleRequest(Api.patch(url, payload));
};

const putRequest = (url, payload, headers) => {
  return handleRequest(Api.put(url, payload, headers));
};

const deleteRequest = (url) => {
  return handleRequest(Api.delete(url));
};

export { getRequest, postRequest, patchRequest, putRequest, deleteRequest };
