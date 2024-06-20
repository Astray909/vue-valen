<!-- reference: https://vueflow.dev/examples/ -->

<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/stawberry_cat.jpg')" class="my-3" contain height="200" />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    What to do for date?
                </h1>
                <div class="headline mb-2">{{ user.data.displayName }}</div>
            </v-col>

            <v-col>
                <div class="vue-flow-container">
                    <VueFlow v-model:nodes="nodes" v-model:edges="edges"></VueFlow>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { db } from '@/firebase/init';
import { collection, addDoc, serverTimestamp, query, onSnapshot, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { VueFlow } from '@vue-flow/core';

export default {
    name: 'FoodWorld',
    components: {
        VueFlow
    },
    data() {
        return {
            nodes: [
                { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
                { id: '2', label: 'Node 2', position: { x: 100, y: 100 } },
                { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
                { id: '4', label: 'Node 4', position: { x: 400, y: 200 } },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2', animated: true },
                { id: 'e1-3', source: '1', target: '3' },
            ]
        };
    },
    computed: {
        ...mapState(['user']),
        reversedDinnerIdeas() {
            return this.dinnerIdeas.slice().reverse();
        }
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

<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";

.vue-flow-container {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
}
</style>
