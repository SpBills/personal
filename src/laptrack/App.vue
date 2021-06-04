<template>
    <main>
        <div class="container">
            <showcase class="showcase" />
            <h1>Explanation</h1>
            <p>
                LapTrack is a laptop inventory management web application made for the a
                local educational district. It is a database management software
                that allows school administrators to issue laptops and keep
                inventory of their assigned students easily. The program
                features a streamlined input strategy, easy editing of records
                on the fly, and user friendly student/laptop lookup. It is
                currently in use.
            </p>
            <div class="technologies">
                <div>
                    <h1>Languages</h1>
                    <ul>
                        <li>TypeScript</li>
                        <li>NodeJS</li>
                        <li>SQL</li>
                        <li>VueJS</li>
                    </ul>
                </div>
                <div>
                    <h1>Technologies</h1>
                    <ul>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>MySQL</li>
                        <li>TypeORM</li>
                    </ul>
                </div>
            </div>
        </div>
        <footing />
    </main>
</template>

<script>
import Footing from "../components/Footing.vue";
import Showcase from "../components/Showcase.vue";
export default {
    components: { Showcase, Footing },
};
</script>

<style>
</style>
