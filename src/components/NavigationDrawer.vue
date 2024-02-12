<template>
    <v-navigation-drawer>
        <v-list dense>
            <v-list-item>
                <v-list-item-action class="d-flex align-center">
                    <v-switch :model-value="isDark" @change="toggleDarkMode" label="Dark Mode"></v-switch>
                </v-list-item-action>
            </v-list-item>

            <v-list-item v-for="item in navigationItems" :key="item.name" link :to="item.path">
                <v-list-item-action class="d-flex align-center">
                    <v-icon>{{ item.icon }}</v-icon>
                    <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    computed: {
        isDark() {
            return this.$store.state.isDark;
        },
        navigationItems() {
            return this.$router.options.routes
                .filter(route => route.meta && route.meta.title && !route.meta.hidden)
                .map(route => ({
                    path: route.path,
                    name: route.name,
                    title: route.meta.title,
                    icon: route.meta.icon || 'mdi-circle-outline'
                }));
        }
    },
    methods: {
        toggleDarkMode() {
            this.$store.commit('toggleDarkMode');
        },
    }
};
</script>

<style scoped></style>
