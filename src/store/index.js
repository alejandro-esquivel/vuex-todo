import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "Buy groceries",
        content: "",
        done: false,
      },
      {
        title: "Fill the car's gas tank",
        content: "Because it's almost empty",
        done: true,
      },
      {
        title: "Learn VueX",
        content: "",
        done: false,
      },
    ],
    doneCheckboxChecked: false,
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
    getDoneTodos(state) {
      return state.todos.filter((todo) => todo.done === true);
    },
    getCheckedTasks(state) {
      return state.doneCheckboxChecked;
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({ ...todo });
    },
    setTodoCompletionState(state, todoIndex) {
      state.todos[todoIndex].done = !state.todos[todoIndex].done;
    },
    removeTodo(state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
  },
  actions: {},
});
