<template>
  <li class="todo">
    <button class="btn status" @click="setStatus(index)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="todo.done"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="!todo.done"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>

    <h2>{{ todo.title }}</h2>
    <button class="btn remove" @click="removeTodo(index)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    setStatus(todoIndex) {
      this.$store.commit("setTodoCompletionState", todoIndex);
    },
    removeTodo(todoIndex) {
      this.$store.commit("removeTodo", todoIndex);
    },
  },
};
</script>

<style>
.todo {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: var(--text-color);
  background-color: var(--main-background-color);
  min-height: 4.3rem;
  padding: 1rem 0.5rem;
  box-shadow: var(--main-box-shadow);
  border-radius: 10px;
}

.todo h2 {
  font-family: var(--title-font);
  font-size: var(--title-size);
  font-weight: normal;
  flex-basis: 90%;
}

.todo .btn {
  flex-basis: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: unset;
  border: unset;
}

.btn.remove:hover {
  color: hsl(0, 70%, 50%);
}
</style>
