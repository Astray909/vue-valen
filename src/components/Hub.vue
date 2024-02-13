<template>
    <v-container>
        <v-row class="text-center" justify="center" align="center">
            <v-col cols="12">
                <v-img :src="require('../assets/angy_frog.png')" class="my-3" contain height="200" />
            </v-col>

            <template v-if="user.loggedIn">
                <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
                    <v-card class="mx-auto my-5" :style="{
                        backgroundColor: card.backgroundColor,
                        borderColor: card.borderColor,
                        borderWidth: '5px',
                        borderStyle: 'solid'
                    }" rounded="lg" elevation="5" @click="navigateTo(card.path)">
                        <v-card-text class="d-flex flex-column align-center justify-center">
                            <v-icon size="56">{{ card.icon }}</v-icon>
                            <div class="mt-2">{{ card.text }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </template>

            <v-col v-else cols="12" sm="6" md="4">
                <h1>Please sign in first</h1>
                <v-row justify="center" v-if="!user.loggedIn" class="my-5">
                    <v-btn color="red" dark large @click="loginWithGoogle">
                        <v-icon left size="25">mdi-google</v-icon>
                        Sign in with Google
                    </v-btn>
                </v-row>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'HubWorld',
    data() {
        return {
            cards: [
                {
                    backgroundColor: '#01BFBF',
                    borderColor: '#F49880',
                    icon: 'mdi-hand-heart',
                    text: 'Will you be my balda?',
                    path: '/balda'
                },
                {
                    backgroundColor: '#FF9686',
                    borderColor: '#6C119C',
                    icon: 'mdi-food-croissant',
                    text: 'What do you want for dinner?',
                    path: '/food'
                }
            ]
        };
    },
    methods: {
        ...mapActions(['signInWithGoogle']),

        navigateTo(path) {
            this.$router.push(path);
        },
        async loginWithGoogle() {
            try {
                await this.signInWithGoogle();
            } catch (error) {
                console.error('Login failed:', error);
                this.$emit('error', 'Login failed. Please try again.');
            }
        }
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>
