<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/stawberry_cat.jpg')" class="my-3" contain height="200" />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    What to eat for dinner
                </h1>
                <div class="headline mb-2">{{ user.data.displayName }}</div>
            </v-col>

            <!-- Display posts -->
            <v-col cols="12" v-for="idea in dinnerIdeas" :key="idea.id">
                <v-card class="mb-4 position-relative">
                    <v-card-title>
                        {{ idea.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ idea.place }}
                        <div>
                            <small>Posted by {{ idea.userName }} on {{ idea.formattedDate }}</small>
                        </div>
                    </v-card-text>
                    <v-btn icon class="ma-2" @click="removeDinnerPost(idea.id)">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-form @submit.prevent="createDinnerPost">
                    <v-text-field v-model="dinnerName" label="Dinner Name" required></v-text-field>
                    <v-text-field v-model="dinnerPlace" label="Place" required></v-text-field>
                    <v-btn color="primary" type="submit">Post</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { db } from '@/firebase/init';
import { collection, addDoc, serverTimestamp, query, onSnapshot, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';

export default {
    name: 'FoodWorld',
    data() {
        return {
            dinnerName: '',
            dinnerPlace: '',
            dinnerIdeas: []
        };
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        async createDinnerPost() {
            try {
                const docRef = doc(db, 'dinner_ideas', 'dinner_post_ID');
                await setDoc(docRef, {}, { merge: true });

                const dinnerPostRef = collection(db, 'dinner_ideas', 'dinner_post_ID', 'posts');
                await addDoc(dinnerPostRef, {
                    name: this.dinnerName,
                    place: this.dinnerPlace,
                    userName: this.user.data.displayName,
                    timestamp: serverTimestamp()
                });

                this.dinnerName = '';
                this.dinnerPlace = '';
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },
        async removeDinnerPost(postId) {
            try {
                const postRef = doc(db, 'dinner_ideas', 'dinner_post_ID', 'posts', postId);
                await deleteDoc(postRef);
            } catch (error) {
                console.error("Error removing document: ", error);
            }
        },
        formatDate(timestamp) {
            if (!timestamp) {
                return 'Loading date...';
            }
            const date = timestamp.toDate();
            return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
        }
    },
    mounted() {
        const q = query(collection(db, 'dinner_ideas', 'dinner_post_ID', 'posts'), orderBy('timestamp'));
        onSnapshot(q, (querySnapshot) => {
            this.dinnerIdeas = [];
            querySnapshot.forEach((doc) => {
                let idea = doc.data();
                idea.id = doc.id;
                idea.formattedDate = this.formatDate(idea.timestamp);
                this.dinnerIdeas.push(idea);
            });
        });
    }
}
</script>
