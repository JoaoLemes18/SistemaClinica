import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  cod_prof: string;
  nome_prof: string;
  cod_espec: number; // Adicionando cod_espec ao estado do usuário
}

const initialState: UserState = {
  cod_prof: "",
  nome_prof: "",
  cod_espec: 0, // Valor inicial pode ser ajustado conforme necessário
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.cod_prof = action.payload.cod_prof;
      state.nome_prof = action.payload.nome_prof;
      state.cod_espec = action.payload.cod_espec;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
