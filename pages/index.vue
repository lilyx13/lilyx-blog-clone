<template>
<div>
  <Header :pageInfo="info.pageTitle" />
  <section>
    <div v-if="topics[0].likes > topics[1].likes && topics[0].likes > topics[2].likes">
     <p class="text-left text-lg">JavaScript is the most popular topic</p>
     <p>{{ topics[0].description }}</p>
    </div>
    <div v-else-if="topics[0].likes > topics[2].likes">
     <p class="text-center text-1xl">JavaScript is the second most popular topic</p>
     <p>{{ topics[1].description }}</p>
    </div> 
    <div v-else>
     <p class="text-right text-md">JavaScript is the least favourite topic</p>
      <p>{{ topics[2].description }}</p>
    </div> 
  </section>
  <section class="container mx-auto flex flex-wrap">
    <Card v-show="topics[0].likes > 100" :info="topics[0]" />
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        tm: "Lilyx Web Consulting",
        name: "Ashlyn Knox",
        pageTitle: 'Home Page'
      },
      topics: [
        {
          title: 'JavaScript',
          likes: 250,
          description: 'Articles about frontend JavaScript.'
        },
        {
          title: 'Linux',
          likes: 50,
          description: 'Articles about setting up and running Linux.'
        },
        {
          title: 'Design',
          likes: 500,
          description: 'Articles about UI and UX design for web development.'
        }
      ]
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
