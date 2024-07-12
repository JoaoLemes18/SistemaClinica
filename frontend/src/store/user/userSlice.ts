import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  cod_prof: string;
  nome_prof: string;
  cod_espec: number;
}

const initialState: UserState = {
  cod_prof: "",
  nome_prof: "",
  cod_espec: 0,
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
    logoutUser(state) {
      state.cod_prof = "";
      state.nome_prof = "";
      state.cod_espec = 0;

      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
