<template>
    <div role="doc-subtitle" class="subheader">{{text}}</div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
                default: ""
            }
        }
    }
</script>

<style scoped>
.subheader {
    opacity: 0.8;
}
</style>