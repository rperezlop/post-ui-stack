import axios from 'axios';

const API_BASE_URL = 'https://dummyapi.io/data/v1/';
/*const API_BASE_URL = 'http://localhost:1234';*/

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Función para realizar llamadas a la API con método GET
  export const fetchData = async (url, params) => {
    try {
      const { data } = await apiClient.get(`${API_BASE_URL}${url}`, {
        ...params,
        headers: {
          'app-id': '63265ae5c7c922129141541d',
          ...params.headers,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

// Función para realizar llamadas a la API con método POST
export const postData = async (url, payload, params) => {
  try {
    const { data: responseData } = await apiClient.post(url, payload, params);
    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};