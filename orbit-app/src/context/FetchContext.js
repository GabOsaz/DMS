import React, { createContext, useEffect } from 'react';
import axios from 'axios';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  // const authContext = useContext(AuthContext);   Only with localStorage

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await authAxios.get('api/csrf-token');
      console.log(data);
      authAxios.defaults.headers['X-CSRF-Token'] = data.csrfToken
    };

    getCsrfToken();
  }, [])

  // Only with localStorage
  // authAxios.interceptors.request.use(
  //   config => {
  //     config.headers.Authorization = `Bearer ${authContext.authState.token}`;
  //     return config
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // )

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
