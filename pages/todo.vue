<template>
  <div class="container mx-auto">
    <header class="container max-w-lg mx-auto py-4">
      <h1 class="text-center">A Todo App</h1>
    </header>
    <section class="container max-w-lg mx-auto">
      <!-- Input fields -->
      <form
        @submit.prevent="addTodo"
        class="container max-w-lg rounded shadow-lg border-solid border-2 p-8"
      >
        <fieldset class="flex flex-col">
          <legend class="text-center"><h3>Add a new Task</h3></legend>
          <!-- Todo Title Input -->
          <label for="todo-title">Todo Title</label>
          <input type="text" name="todo-title" v-model="todo.title" />
          <!-- Todo Description Input  -->
          <label for="todo-descript">Todo Description</label>
          <input type="text" name="todo-descript" v-model="todo.descript" />
          <!-- This can use v-on as well -->
          <button>Add Item</button>
        </fieldset>
      </form>
      <!-- Add a task -->
    </section>
    <section class="container max-w-lg mx-auto pt-8">
      <h2 class="text-center">Today's Tasks</h2>
      <div>
        <ul class="container max-w-lg">
          <li
            v-for="todo in todoItems"
            :key="todo.id"
            class="border-solid border-2 my-4"
          >
            <h3 class="bg-gray-200 px-4">{{ todo.title }}</h3>
            <p class="p-4">{{ todo.descript }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        descript: "",
      },
      todoItems: [
        {
          title: "Test One",
          descript: "Descript one",
        },
        {
          title: "Test Two",
          descript: "Descript two",
        },
      ],
    };
  },
  methods: {
    addTodo: function () {
      console.log("submitting");
      return this.todoItems.push({
        title: this.todo.title,
        descript: this.todo.descript,
      });
    },
  },
};
</script>
<style lang="postcss" scoped>
label {
  @apply font-semibold mt-3;
}
input[type="text"] {
  @apply border-solid border-2 rounded-sm my-2 p-1;
}
button {
  @apply bg-green-600 hover:bg-green-800 text-white py-2 w-40 mx-auto mt-4 justify-self-end;
}
</style>