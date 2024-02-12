<template>
    <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ header }}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',
    props: {
        header: String
    }
};
</script>

<style scoped></style>
