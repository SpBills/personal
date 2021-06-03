<template>
    <header>
        <name text="Spencer Bills" />
        <sub-name text="Web Application Developer" />
        <a href="./resume.pdf" download>Download my Resume</a>
    </header>
</template>

<script>
import Name from './Name.vue'
import SubName from './SubName.vue'
export default {
  components: { Name, SubName },
    
}
</script>

<style>
html body main header * {
    font-family: 'Courier Prime', monospace;
}
</style>