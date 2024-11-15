import axios from "axios";

const API_BASE_URL = "http://localhost:3000/auth";

export const registerUser = async (data: {
  cod_prof: string;
  nome_prof: string;
  cod_espec: string;
  senha_prof: string;
  tipo_prof: number;
  status_prof: number;
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data: {
  cod_prof: string;
  senha_prof: string;
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
