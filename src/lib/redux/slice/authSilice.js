import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const BackendUri = "http://localhost:5000/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    errors: {},
  },
  reducers: {
    login: async (state, action) => {
      try {
        const res = await Axios.post(BackendUri, action.payload);
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem("token", token);
      } catch (err) {
        console.log(err.response.data);
        return state;
        // state = {
        //   ...state,
        //   errors: err.response.data.message,
        // };
      }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
