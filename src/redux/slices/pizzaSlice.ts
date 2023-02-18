import { createSlice } from '@reduxjs/toolkit';

type Piza = { id: number, title: string , price: number, imageUrl: string, sizes: number[], types: number[]}

interface PizzaSliceState { 
  items: Piza[]; 
}

const initialState: PizzaSliceState = {
  items: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
