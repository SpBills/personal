<template>
    <div class="projects-container">
        <project
            v-for="(project, i) in projects"
            :key="i"
            :title="project.title"
            :text="project.text"
            :timestamp="project.timestamp"
            :icourl="project.ico_url"
            :backgroundurl="project.background_url"
            :buttoncolor="project.button_color"
            :customlink="project.custom_link"
        />
    </div>
</template>

<script>
import Project from "./Project.vue";
import projects from "../assets/projects.json";
export default {
    components: { Project },
    data() {
        return {
            projects,
        };
    },
};
</script>

<style scoped>
.projects-container {
    display: flex;
    width: 75%;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
