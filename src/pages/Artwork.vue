<template>
    <body>
        <Header></Header>
        <Menu></Menu>

        <div>
            <h1>{{ $t("artwork.mg") }}</h1>
        </div>

        <div>
            <h1>{{ $t("artwork.3d") }}</h1>
        </div>

        <div>
            <h1>{{ $t("artwork.pp") }}</h1>
        </div>

        <div>
            <h1>{{ $t("artwork.cc") }}</h1>
        </div>
    </body>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
</script>

<script lang="ts">
export default {
    name: "Artwork"
}
</script>

<style scoped>
</style>
