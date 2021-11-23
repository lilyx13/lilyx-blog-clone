<template>
  <div>
    <label for="todo-title">Todo Title</label>
    <input type="text" />
  </div>
</template>
<script>
export default {
  props: {
    inputData: String,
  },
};
</script>