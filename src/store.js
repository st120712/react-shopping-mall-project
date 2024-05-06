import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';
import cartItem from './store/cartSlice.js';


export default configureStore({
	reducer: {
		user: user.reducer,
		cartItem: cartItem.reducer
	}
})