<template>
    <main class="main-content">
        <heading class="heading" />
        <h1 class="work-title">My work</h1>
        <projects class="projects" />
        <footing />
    </main>
</template>

<script>
import Footing from "../components/Footing.vue";
import Heading from "../components/Heading.vue";
import Projects from "../components/Projects.vue";
export default {
    components: { Heading, Projects, Footing },
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
    font-family: "Courier Prime", monospace;
    letter-spacing: 1.5px;
}

p,
small,
button,
span,
footer {
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
