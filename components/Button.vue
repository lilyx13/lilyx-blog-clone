<template>
  <button @click="btnMethod" class="btn">{{ btnText }}</button>
</template>
<style lang="postcss" scoped>
.btn {
  @apply text-white font-bold py-2 px-4 my-2 rounded w-48;
}
</style>
<script>
export default {
  props: ["btnMethod", "btnText"],
};
</script>