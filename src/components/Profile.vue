<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 pa-5" style="border-radius: 10px;">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title v-if="!user.loggedIn">Login</v-toolbar-title>
                        <v-toolbar-title v-else>Info</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row justify="center" v-if="!user.loggedIn" class="my-5">
                                <v-btn color="red" dark large @click="loginWithGoogle">
                                    <v-icon left size="25">mdi-google</v-icon>
                                    Sign in with Google
                                </v-btn>
                            </v-row>
                            <v-row justify="center" v-else class="my-5">
                                <v-avatar size="120" class="mb-3">
                                    <img :src="user.data.photoURL" alt="Profile">
                                </v-avatar>
                                <v-col class="text-center">
                                    <div class="headline mb-2">{{ user.data.displayName }}</div>
                                    <div class="subheading mb-2">{{ user.data.email }}</div>
                                    <v-btn color="primary" dark large @click="logoutWithGoogle">
                                        <v-icon left size="25">mdi-logout</v-icon>
                                        Sign out
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'ProfilePage',
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
  
<style scoped>
.v-avatar img {
    object-fit: cover;
}
</style>
  