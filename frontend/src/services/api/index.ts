import axios from "axios";

const API_BASE_URL = "http://localhost:3000/auth"; // Base para autenticação
const API_BASE_ESPECIALIDADES_URL = "http://localhost:3000/especialidades"; // Base para especialidades

// Registrar usuário
export const registerUser = async (data: {
  cod_prof: string;
  nome_prof: string;
  cod_espec: string;
  senha_prof: string;
  tipo_prof: number;
  status_prof: number;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fazer login do usuário
export const loginUser = async (data: {
  cod_prof: string;
  senha_prof: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Buscar especialidades
export const fetchEspecialidades = async () => {
  try {
    const response = await axios.get(API_BASE_ESPECIALIDADES_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
