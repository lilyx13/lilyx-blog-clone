<template>
  <div>
    <header>
      <h1>A Todo App</h1>
    </header>
    <section>
      <h2>Add a new Task</h2>
      <!-- Input fields -->
      <form @submit="onSubmit">
        <!-- Todo Title Input -->
        <label for="todo-title">Todo Title</label>
        <input type="text" name="todo-title" v-model="todo.title" />
        <!-- Todo Description Input  -->
        <label for="todo-descript">Todo Description</label>
        <input type="text" name="todo-descript" v-model="todo.descript" />
        <!-- This can use v-on as well -->
        <button @submit="addTodo">Add Item</button>
      </form>
      <!-- Add a task -->
    </section>
    <section>
      <h2>Today's Tasks</h2>
      <div>
        <ul>
          <li v-for="todo in todoItems" :key="todo.id">
            <h3>{{ todo.title }}</h3>
            <p>{{ todo.descript }}</p>
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
    addTodo: function (event) {
      return this.todoItems.push({
        title: "todo.title",
        descript: "todo.descript",
      });
    },
    onSubmit: function () {
      console.log("submitting");
    },
  },
};
</script>