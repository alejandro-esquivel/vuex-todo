<template>
  <section class="vuedo-adder">
    <input
      type="text"
      class="todo-input"
      maxlength="100"
      placeholder="Write your task..."
      v-model="todo.title"
    />
    <button class="btn add-todo" title="Add todo" @click="addTodo()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function () {
    return {
      todo: {
        title: "",
        content: "",
        done: false,
      },
    };
  },
  methods: {
    addTodo() {
      if (!this.todo.title.length == 0) {
        this.$store.commit("addTodo", this.todo);
        this.todo = {
          title: "",
          content: "",
          done: false,
        };
      } else {
        alert("You must write a task first.");
      }
    },
  },
};
</script>

<style scoped>
.vuedo-adder {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 7rem;
  width: var(--containers-width);
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: -1px 2px 6px 0 #2f2f2f;
}

.todo-input {
  height: inherit;
  background-color: #abd2fa;
  color: var(--text-color);
  font-size: 1.3rem;
  padding: 1rem 0.5rem;
  border: none;
  flex-basis: 95%;
}

todo-input:focus {
  outline: none;
  border-bottom: 1px solid orange;
}

todo-input::placeholder {
  color: var(--text-color);
  opacity: 0.8;
}

.btn.add-todo {
  flex-basis: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: unset;
  border: unset;
}
</style>
