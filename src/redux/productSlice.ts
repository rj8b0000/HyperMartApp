import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, productData } from '../data/productData';

interface ProductState {
  products: Product[];
}
const initialState: ProductState = {
  products: productData,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
