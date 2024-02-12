<template>
    <v-navigation-drawer>
        <v-list dense>
            <v-list-item>
                <v-list-item-action class="d-flex align-center">
                    <v-switch insert :model-value="$root.isDark" @update:model-value="$emit('toggleDarkMode')"
                        label="Dark Mode"></v-switch>
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
    }
};
</script>

<style scoped></style>
