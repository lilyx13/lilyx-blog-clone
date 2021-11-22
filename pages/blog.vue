<template>
<div>
  <Header :pageInfo="siteInfo" />
  <header>
    <h1>Tech {{ siteInfo.pageName }}</h1>
  </header>
  <footer>
    <p>&copy; 2021 | {{ siteInfo.author }}</p>
  </footer>
</div>
</template>
<script>
export default {
  data () {
    return {
      siteInfo: {
        pageName: "Blog",
        author: "Ashlyn",
        image: "images/excavation.jpg"
      },
      topics: [
        {
          title: "JavaScript",
          description: "Articles about JS",
          difficulty: "Intermediate"
        },
        {
          title: "Linux",
          description: "Articles about Fedora Linux",
          difficulty: "Advanced"
        },
        {
          title: "Design",
          description: "UI/UX design, logo design, and css styles.",
          difficulty: "Beginner"
        }
      ]
    }
  }
}
</script>
