<template>
  <article class="container max-w-lg mx-auto pt-8">
    <h2 class="text-center">Today's Tasks</h2>
    <div>
      <ul class="container max-w-lg">
        <li
          v-for="todo in todoTasks"
          :key="todo.id"
          class="border-solid border-2 my-4"
        >
          <h3 class="bg-gray-200 px-4">{{ todo.title }}</h3>
          <p class="p-4">{{ todo.description }}</p>
        </li>
      </ul>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    todoTasks: {
      type: Array,
    },
  },
};
</script>