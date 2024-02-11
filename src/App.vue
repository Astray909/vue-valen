<template>
    <v-app :theme="currentTheme">
        <AppBar :drawerVisible="drawerVisible" @toggleDrawer="toggleDrawer" />
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
        }
    },
    watch: {
        isDark(newValue) {
            localStorage.setItem('isDark', newValue);
        }
    },
    computed: {
        currentTheme() {
            return this.isDark ? 'dark' : 'light';
        },
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
        },
        toggleDrawer() {
            this.drawerVisible = !this.drawerVisible;
        }
    }
}
</script>
  
<style>
/* Your existing styles or any modifications */
</style>
