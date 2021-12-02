<template>
  <form
    @submit.prevent="onSubmit"
    class="container max-w-lg rounded shadow-lg border-solid border-3 p-8"
  >
    <fieldset class="flex flex-col">
      <legend class="text-center"><h2>Add a new Task</h2></legend>
      <!-- Todo Title Input -->
      <label for="todo-title">Todo Title</label>
      <input type="text" name="todo-title" v-model="todo.title" />
      <!-- Todo Description Input  -->
      <label for="todo-descript">Todo Description</label>
      <input type="text" name="todo-descript" v-model="todo.description" />
      <!-- This can use v-on as well -->
      <button>Add Item</button>
    </fieldset>
    <p>{{ todo.title }}</p>
  </form>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("form-submitted", {
        title: this.todo.title,
        description: this.todo.description,
      });
    },
  },
};
</script>