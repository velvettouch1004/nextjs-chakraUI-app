import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const BackendUri = "http://localhost:5000/dev";

export const devSlice = createSlice({
  name: "devs",
  initialState: [],
  reducers: {
    addUser: async (state, action) => {
      try {
        await Axios.post(BackendUri, action.payload);
      } catch (error) {
        console.log(error);
      }

      return { ...state };
    },
    getDevs: async (state, action) => {
      try {
        const { data } = await Axios.get(BackendUri);
        console.log(data);
        return [data];
      } catch (error) {}
    },
  },
});

export const { addUser, getDevs } = devSlice.actions;

export default devSlice.reducer;
