<template>
<figure class="container border-solid rounded-md drop-shadow-md">
  <h3 class="text-xl text-center">{{ info.title }}</h3>
  <nuxt-img v-if="info.img" :src="info.img"  sizes="sm:100vw md:100px lg:200px" />
  <nuxt-img v-else src="images/python-code.jpg" alt="Python Code" sizes="sm:100vw md: 100px lg:200px" />
  <figcaption class="text-md">{{ info.description }}</figcaption>
  <p class="text-sm">{{ info.difficulty }}</p>
  </figure> 
</template>

<script>
export default {
  props: ['info']
}
</script>