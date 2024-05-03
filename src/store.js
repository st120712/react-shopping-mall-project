import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
	name: 'user',
	initialState: 'kim'
})

let cartItem = createSlice({
	name: 'cartItem',
	initialState: [
		{ id: 0, name: 'White and Black', count: 2 },
		{ id: 1, name: 'Grey Yordan', count: 1 }
	]
})

export default configureStore({
	reducer: {
		user: user.reducer,
		cartItem: cartItem.reducer
	}
})