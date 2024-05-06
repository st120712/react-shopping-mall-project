import { createSlice } from "@reduxjs/toolkit";

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    increase(state, action) {
      state.map((e, i) => {
        if (e.id == action.payload) {
          e.count += 1;
        }
      })
    },
    decrease(state, action) {
      state.map((e, i) => {
        if (e.count > 0 && e.id == action.payload) {
          e.count -= 1;
        }
      })

    },
    addProduct(state, action) {
      let item = action.payload;
      let hasId = false;

      state.find((element) => {
        if (element.id == item.id)
          hasId = true;
      })

      if (hasId) {
        state.map((e, i) => {
          if (e.id == item.id)
            e.count += 1;
        })
      } else {
        state.push({ id: item.id, name: item.title, count: 1 });
      }
    },
    deleteProduct(state, action) {
      let i = state.findIndex((a) => a.id == action.payload);
      state.pop(i);
    }
  }
})

export let { increase, decrease, addProduct, deleteProduct } = cartItem.actions;

export default cartItem;