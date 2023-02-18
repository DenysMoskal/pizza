import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = { 
      id: string; 
      title: string;
      price: number; 
      imageUrl: string; 
      type: string;
      size: number;
      count: number;
}

interface CartSliceState { 
  totalPrice: number; 
  items: CartItem[]; 
}


const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((accum, item) => {
        accum = accum + item.price * item.count;
        return accum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string> ) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if(findItem){ 
        if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      state.totalPrice -= findItem.price;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      if(findItem){ 
        state.totalPrice -= findItem.price * findItem.count;
      }
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, clearItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
