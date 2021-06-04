<template>
    <main>
        <div class="container">
            <name text="Contact Me" />
            <ul>
                <li>Email: <a href="mailto:spencebills0@gmail.com">spencebills0@gmail.com</a></li>
            </ul>
        </div>
        <footing />
    </main>
</template>

<script>
import Footing from '../components/Footing.vue';
import Name from "../components/Name.vue";
export default {
    components: { Name, Footing },
};
</script>

<style>
main {
    min-height: 100vh;
}

.container {
    padding-top: 100px;
    flex: 1;
}
</style>
