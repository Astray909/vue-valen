<template>
    <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ header }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="user.loggedIn">
            <router-link to="/profile">
                <v-avatar size="32px" class="mr-2" style="cursor: pointer;">
                    <img :src="user.data.photoURL" alt="Profile">
                </v-avatar>
            </router-link>
        </template>
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
        ...mapActions(['signInWithGoogle']),

        async loginWithGoogle() {
            try {
                await this.signInWithGoogle();
            } catch (error) {
                console.error('Login failed:', error);
                this.$emit('error', 'Login failed. Please try again.');
            }
        }
    }
};
</script>

<style>
.custom-router-link .v-btn,
.custom-router-link .v-btn:visited {
    color: initial;
}
</style>
