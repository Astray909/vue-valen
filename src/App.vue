<template>
    <v-app :theme="currentTheme">
        <AppBar :drawerVisible="drawerVisible" @toggleDrawer="toggleDrawer" :header="appBarHeader" />
        <NavigationDrawer v-model="drawerVisible" @toggleDarkMode="toggleDarkMode" />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';
import AppBar from './components/AppBar.vue';

export default {
    name: 'App',
    components: {
        NavigationDrawer,
        AppBar,
    },
    data() {
        return {
            isDark: localStorage.getItem('isDark') === 'true' ||
                (localStorage.getItem('isDark') === null &&
                    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
            drawerVisible: false,
            appBarHeader: 'Default Header',
        }
    },
    watch: {
        isDark(newValue) {
            localStorage.setItem('isDark', newValue);
        },
        '$route'() {
            this.updateAppBarHeader();
        }
    },
    computed: {
        currentTheme() {
            return this.isDark ? 'dark' : 'light';
        },
    },
    mounted() {
        this.updateAppBarHeader();
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
        },
        toggleDrawer() {
            this.drawerVisible = !this.drawerVisible;
        },
        updateAppBarHeader() {
            const currentRoute = this.$route;
            this.appBarHeader = currentRoute.meta.header || 'Default Header';
        }
    }
}
</script>

<style></style>
