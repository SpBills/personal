<template>
    <main>
        <div class="container">
            <showcase class="showcase" />
            <h1>Explanation</h1>
            <p>
                LapTrack is a laptop inventory management program made for the
                Wetzel County School District. This was commissioned from me in
                the summer of 2020. It was deployed in the winter of 2020, and
                is now in current use.
            </p>
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
