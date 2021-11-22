<template lang="pug">
.app
  <Navigation />
  header
    h1 {{ info.tm }}
    p by {{ info.name }}

  main
    div
      p Hey, I'm Ashlyn Knox. I am a web developer and teacher from Calgary Canada.
</template>

<script>
export default {
  data() {
    return {
      info: {
        tm: "Lilyx Web Consulting",
        name: "Ashlyn Knox",
      },
    };
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
