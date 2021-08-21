import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchValueState {
  value: string;
}

const initialState: SearchValueState = {
  value: ''
}

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})


export const { changeValue } = searchValueSlice.actions

export const selectSearchValue = (state: RootState) => state.searchValue.value

export default searchValueSlice.reducer
