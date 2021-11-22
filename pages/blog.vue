<template>
<div>
  <Header :pageInfo="siteInfo" />
  <header>
    <h1>Tech {{ siteInfo.pageName }}</h1>
  </header>
  <main>
    <h2>A Loop of Cards</h2>
    <Card v-for="topic in topics" :key="topic.id" :info="topic" />
    <section>
      <h2>Topics</h2>
      <ul>
        <li v-for="(topic, index) in topics" :key="index">
          {{ index + 1 }} - {{ topic.title }}
        </li>
      </ul>
      <ol>
        <li v-for="(value, name, index) in topics[0]" :key="index">
         {{ index + 1 }} - {{name}} - {{ value }}
        </li>
      </ol>
    </section>
  </main>
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
      },
      topics: [
        {
          title: "JavaScript",
          description: "Articles about JS",
          difficulty: "Intermediate",
          img: "images/javascript-min.jpg"
        },
        {
          title: "Python",
          description: "Articles about Python Code",
          difficulty: "Beginner",
          img: "images/python-code.jpg",
        },
        {
          title: "Design",
          description: "UI/UX design, logo design, and css styles.",
          difficulty: "Beginner",
          img: "images/ux-design.jpg"
        }
      ]
    }
  }
}
</script>
