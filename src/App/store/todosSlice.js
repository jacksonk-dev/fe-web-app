import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: state => {
      state.value -= 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove } = todosSlice.actions

export default todosSlice.reducer
