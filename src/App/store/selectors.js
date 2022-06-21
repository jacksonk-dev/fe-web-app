import { useSelector } from "react-redux";

export const useTodos = () => useSelector((state) => state.todos.value)
export const useTodo = (id) => useSelector((state) => state.todos.value[id])
