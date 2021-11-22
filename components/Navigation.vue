<template lang="pug">
nav
  div
    nuxt-link(to="/") Home
  ul
    li
      nuxt-link.sitelink(to="/blog") Blog
    li
      nuxt-link.sitelink(to="/labs") Labs
    li
      nuxt-link.sitelink(to="contact") Contact
</template>
<style lang="sass" scoped>
nav
  @apply container mx-auto flex py-6 px-3
ul
  @apply flex flex-wrap
.sitelink
  @apply text-lg mx-2
</style>
