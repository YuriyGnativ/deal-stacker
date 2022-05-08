import { getToken, setToken, removeToken } from "./tokenApi";

export const interceptor = (instance) => {
  instance.interceptors.request.use(
    function (config) {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      const token = response?.data?.token || null;
      if (token) {
        removeToken();
        setToken(token);
      }
      return response;
    },
    function (error) {
      if (error.response.status === 403 || error.response.status === 410) {
        // removeToken();
      }
      return Promise.reject(error);
    }
  );
};
