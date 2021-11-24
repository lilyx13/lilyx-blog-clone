<template>
  <header class="container mx-auto mb-8 mt-4">
    <h1 class="text-2xl text-center">{{ pageInfo.title }}</h1>
    <p class="text-center">{{ pageInfo.description }}</p>
  </header>
</template>
<script>
export default {
  props: ["pageInfo"],
};
</script>
