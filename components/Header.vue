<template>
  <header>
    <h1 class="text-2xl text-center">{{ pageInfo.pageName }}</h1>
  </header>
</template>
<script>
export default {
  props: ["pageInfo"],
};
</script>
