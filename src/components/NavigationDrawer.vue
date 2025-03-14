<template>
    <v-navigation-drawer>
        <v-list dense>
            <v-list-item>
                <v-list-item-action class="d-flex justify-space-between align-items-center">
                    <v-switch :model-value="isDark" @change="toggleDarkMode" label="Dark Mode"
                        hide-details="true"></v-switch>
                    <v-btn icon @click="resetDarkMode" class="ml-auto">
                        <v-icon>mdi-theme-light-dark</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-list-item link :to="navigationItems[0].path">
                <v-list-item-action class="d-flex align-items-center">
                    <v-icon>{{ navigationItems[0].icon }}</v-icon>
                    <v-list-item-title class="ml-2">{{ navigationItems[0].title }}</v-list-item-title>
                </v-list-item-action>
            </v-list-item>

            <div v-if="user.loggedIn">
                <v-list-item v-for="item in filteredNavigationItems" :key="item.name" link :to="item.path">
                    <v-list-item-action class="d-flex align-items-center">
                        <v-icon>{{ item.icon }}</v-icon>
                        <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NavigationDrawer',
    computed: {
        ...mapState(['user']),

        isDark() {
            return this.$vuetify.theme.current.dark;
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
        },
        filteredNavigationItems() {
            return this.navigationItems.slice(1);
        }
    },
    methods: {
        toggleDarkMode() {
            let isDark = this.$vuetify.theme.current.dark;
            this.$store.commit('toggleDarkMode', isDark);
        },
        resetDarkMode() {
            this.$store.commit('resetDarkMode');
        },
    }
};
</script>

<style scoped></style>
