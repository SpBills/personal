<template>
    <main>
        <div class="container">
            <showcase class="showcase" />
            <h1>Explanation</h1>
            <p>
                Schedulizer is a program that is expressly created for
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
        </div>
        <footing />
    </main>
</template>

<script>
import Footing from '../components/Footing.vue';
import Showcase from "../components/Showcase.vue";
export default {
    components: { Showcase, Footing },
};
</script>

<style>
main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    width: 70%;
}

p {
    line-height: 140%;
}

h1,
h2,
h3,
h4,
h5 {
    font-family: "Courier Prime", monospace;
    letter-spacing: 1.5px;
}

* {
    font-family: "Open Sans", sans-serif;
}

.showcase {
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container {
    width: 70%;
}
</style>
