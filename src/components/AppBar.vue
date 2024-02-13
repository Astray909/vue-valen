<template>
    <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ header }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Display user info and logout button if logged in -->
        <template v-if="user.loggedIn">
            <router-link to="/profile">
                <v-avatar size="32px" class="mr-2" style="cursor: pointer;">
                    <img :src="user.data.photoURL" alt="Profile">
                </v-avatar>
            </router-link>
            <v-btn text @click="logoutWithGoogle">Logout</v-btn>
        </template>
        <!-- Display login button if logged out -->
        <template v-else>
            <v-btn text @click="loginWithGoogle">Login</v-btn>
        </template>
    </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'AppBar',
    props: {
        header: String
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapActions(['signInWithGoogle', 'signOut']),

        async loginWithGoogle() {
            try {
                await this.signInWithGoogle();
            } catch (error) {
                console.error('Login failed:', error);
                this.$emit('error', 'Login failed. Please try again.');
            }
        },

        async logoutWithGoogle() {
            try {
                await this.signOut();
            } catch (error) {
                console.error('Logout failed:', error);
                this.$emit('error', 'Logout failed. Please try again.');
            }
        }
    }
};
</script>
