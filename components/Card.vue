<template>
<figure>
  <h3>{{ info.title }}</h3>
  <nuxt-img :src="info.img"  sizes="sm:100vw md:50vw lg:400px" />
  <figcaption>{{ info.description }}</figcaption>
  <p>{{ info.difficulty }}</p>
  </figure> 
</template>

<script>
export default {
  props: ['info']
}
</script>