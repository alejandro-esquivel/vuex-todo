<template>
  <div>
    <vuedo-adder></vuedo-adder>
    <main>
      <section class="completed-container">
        <label for="doneCheckbox" class="completed-label">
          Show completed Tasks
          <input type="checkbox" name="completedTasks" v-model="checkedState" />
        </label>
      </section>
      <todo-list></todo-list>
    </main>
  </div>
</template>

<script>
import store from "./store/index.js";
import VueDoAdder from "./components/VueDoAdder.vue";
import TodoList from "./components/TodoList.vue";
import { mapGetters } from "vuex";

export default {
  name: "VueDo",
  store,
  components: {
    "vuedo-adder": VueDoAdder,
    "todo-list": TodoList,
  },
  computed: {
    ...mapGetters({
      checkedState: "getCheckedTasks",
    }),
  },
};
</script>

<style>
.completed-container {
  background-color: var(--main-background-color);
  display: flex;
  align-items: center;
  max-width: var(--containers-width);
  min-height: 4.3rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem 3rem;
  border-radius: var(--main-border-radius);
  box-shadow: var(--main-box-shadow);
}

.completed-container label {
  font-size: var(--text-size);
  font-family: var(--text-font);
}

.completed-container input[type="checkbox"] {
  margin-left: 1rem;
  width: 1rem;
  height: 1rem;
}
</style>
