<template>
    <main>
        <div class="container">
            <showcase class="showcase" />
            <h1>Explanation</h1>
            <p>
                Schedulizer is a web application that is expressly created for
                minimizing all of the end-of-the-year stress related to
                generating schedules. It starts by gathering all information
                about the upcoming school year, gathering student course
                interest, and finally, efficiently and precisely generates a
                schedule in less than a second. After schedule generation,
                Schedulizer exports a printable schedule that is available at
                the click of a button. The schedule can be distributed to
                reviewers for suggestions and comments. Revisions to the
                schedule can be made through the incredibly intuitive schedule
                management dashboard.
            </p>
            <div class="technologies">
                <div>
                    <h1>Languages</h1>
                    <ul>
                        <li>Rust</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>VueJS</li>
                    </ul>
                </div>
                <div>
                    <h1>Technologies</h1>
                    <ul>
                        <li>MariaDB</li>
                        <li>Diesel (Rust ORM)</li>
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
