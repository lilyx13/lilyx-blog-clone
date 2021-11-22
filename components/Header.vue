<template>
<header>
  <h1> {{ pageInfo.pageName }}</h1>
  <nuxt-img :src="pageInfo.image" alt="" />
</header>
</template>
<script>
export default {
  props: ['pageInfo']
}
</script>