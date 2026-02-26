import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, productData } from '../data/productData';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated qty:', existingItem.quantity);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        console.log('New item added');
        console.log({ ...action.payload });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items.filter(item => item.id === action.payload.id);
    },
    increaseQty: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQty: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
