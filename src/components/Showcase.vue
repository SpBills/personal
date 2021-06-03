<template>
    <div>
        <header class="heading">
            <img :src="`${getImageUrl()}`" height="50" width="50" />
            <name class="name" :text="getTitleUrl()" />
        </header>
        <h1 class="gallery-title">Gallery</h1>
        <gallery class="gallery" />
    </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';
import Name from "../components/Name.vue";
export default {
    components: { Name, Gallery },
    methods: {
        getImageUrl() {
            return new URL(location.href).searchParams.get("imageurl");
        },
        getTitleUrl() {
            return new URL(location.href).searchParams.get("title");
        }
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

.gallery {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gallery img {
    margin-top: 10px;
    width: 100%;
}

.gallery-title {
    width: 100%;
}

.heading {
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
}

.name {
    display: inline-block;
    margin: auto 0 auto 20px;
}

.projects {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex-wrap: wrap;
}
button {
    font-weight: 600;
}

.work-title {
    text-align: center;
}
</style>
