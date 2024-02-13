<template>
    <v-app :theme="currentTheme">
        <AppBar :drawerVisible="drawerVisible" @toggleDrawer="toggleDrawer" :header="appBarHeader" />
        <NavigationDrawer v-model="drawerVisible" />
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
            drawerVisible: false,
            appBarHeader: 'Default Header',
        }
    },
    computed: {
        currentTheme() {
            return this.$store.state.isDark ? 'dark' : 'light';
        },
    },
    watch: {
        '$route'() {
            this.updateAppBarHeader();
        }
    },
    mounted() {
        this.updateAppBarHeader();
    },
    methods: {
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
  