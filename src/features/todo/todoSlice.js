import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid : to generate unique id

const initialState = {
  todos: [{ id: 1, text: "Hello World!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
