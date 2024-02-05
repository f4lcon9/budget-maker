import { IData } from "@/model/data";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  data: IData[];
  balance: number;
}

const initialState: DataState = {
  data: [],
  balance: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    load: (state, action) => {
      state.data = action.payload;
      var bal = 0;
      for (const d of action.payload) {
        console.log(d.amount)
        if (d.type == "+") {
          bal += d.amount;
        } else {
          bal = bal - d.amount;
        }
      }
      state.balance = bal
    },
    addNewData: (state, action) => {
      state.data.push(action.payload);
      if(action.payload.type == "+"){
        state.balance += action.payload.amount
      }else{
        state.balance -= action.payload.amount

      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { load, addNewData } = dataSlice.actions;

export default dataSlice.reducer;
