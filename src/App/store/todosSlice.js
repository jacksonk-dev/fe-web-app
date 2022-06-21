import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    editTodo: (state, action) => {
      state[action.payload.id] = action.payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer
