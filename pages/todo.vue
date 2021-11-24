<template>
  <div class="container mx-auto">
    <Header :pageInfo="appInfo" />
    <!-- Form Input -->
    <section class="container max-w-lg mx-auto">
      <TodoForm />
    </section>
    <!-- Input fields -->
    <section>
      <TaskList />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appInfo: {
        title: "A Todo App",
        description: "Organize Your Life.",
      },
    };
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