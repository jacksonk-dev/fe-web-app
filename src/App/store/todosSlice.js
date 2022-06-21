import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: 'value',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    editTodo: (state, action) => {
      state.value[action.payload.id] = action.payload.data
    },
    deleteToDo: (state, action) => {
      state.value = state.value.filter((todo, index) => {
        return index !== action.payload
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, editTodo, deleteToDo } = valueSlice.actions

export default valueSlice.reducer
