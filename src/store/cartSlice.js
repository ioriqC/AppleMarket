import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItems(state, action) {
      state.cart.push({
        ...action.payload,
      });
    
    },
    delItems(state, action) {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload.id);
      
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchData.pending, (state) => {
    //   state.status = 'loading';
    //   state.items = [];
    // });

    // builder.addCase(fetchData.fulfilled, (state, action) => {
    //   state.items = action.payload;
    //   state.status = 'success';
    // });

    // builder.addCase(fetchData.rejected, (state) => {
    //   state.status = 'error';
    //   state.items = [];
    // });
  },
});

export const { addItems, delItems } = cartSlice.actions;
export default cartSlice.reducer;