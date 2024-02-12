<template>
    <v-container>
        <v-btn v-if="!userSignedIn" @click="signInWithGoogle" color="primary">Sign in with Google</v-btn>
        <div v-else>
            <v-btn @click="signOutWithGoogle" color="error">Sign Out</v-btn>
            <div>
                <img :src="user.photoURL" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;">
                <p>Name: {{ user.displayName }}</p>
                <p>Email: {{ user.email }}</p>
                <p>UID: {{ user.uid }}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
import { auth } from '@/firebase/init';
import { GoogleAuthProvider, signInWithRedirect, signOut, getRedirectResult, onAuthStateChanged } from 'firebase/auth';

export default {
    name: 'LogIn',
    data() {
        return {
            userSignedIn: false,
            user: null,
        };
    },
    methods: {
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider).catch(error => {
                console.error("Sign in error:", error.message);
            });
        },
        signOutWithGoogle() {
            signOut(auth).catch(error => {
                console.error("Sign out error:", error.message);
            });
        },
        handleRedirectResult() {
            getRedirectResult(auth)
                .then(result => {
                    if (result?.user) {
                        this.userSignedIn = true;
                        this.user = result.user;
                    }
                })
                .catch(error => {
                    console.error("Redirect result error:", error.message);
                });
        }
    },
    mounted() {
        this.handleRedirectResult();
        onAuthStateChanged(auth, (user) => {
            this.userSignedIn = !!user;
            this.user = user;
        });
    }
}
</script>
