<template>
  <transition-group name="todolist" tag="ul" class="todoList">
    <todo-item
      v-for="(todo, index) in getAllTodos"
      :key="index"
      :todo="todo"
      :index="index"
    ></todo-item>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: {
    "todo-item": Todo,
  },
  computed: {
    ...mapGetters(["getAllTodos", "getDoneTodos"]),
  },
  provide: ["todo"],
};
</script>

<style>
.todoList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  width: var(--containers-width);
  margin: 0 auto;
  margin-top: 2rem;
}

@keyframes slide-in {
}
</style>
