<template>
    <main class="main-content">
        <heading class="heading" />
        <h1 class="work-title">My work</h1>
        <projects class="projects" />
    </main>
</template>

<script>
import Heading from "../components/Heading.vue";
import Projects from "../components/Projects.vue";
export default {
    components: { Heading, Projects },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

.heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
}

.projects {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
}

h1,
h2,
h3,
h4,
h5 {
    font-family: "Bebas Neue", cursive;
    letter-spacing: 1.5px;
}

p,
small,
button {
    font-family: "Open Sans", sans-serif;
}

button {
    font-weight: 600;
}

.work-title {
    text-align: center;
}

.main-content {
}
</style>
