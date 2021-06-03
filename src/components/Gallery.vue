<template>
    <div>
        <img v-for="(src, i) in srcs" :key="i" :src="`gallery/${src}`" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            srcs: JSON.parse(new URL(window.location).searchParams.get("gallery"))
        }
    }
};
</script>

<style lang="scss" scoped></style>
