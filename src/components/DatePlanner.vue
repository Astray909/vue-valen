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
                    <VueFlow :nodes="nodes" :edges="edges" :class="{ dark }" class="basic-flow"
                        :default-viewport="{ zoom: 1.5 }" :min-zoom="0.2" :max-zoom="4">
                        <Background pattern-color="#aaa" :gap="16" />
                        <MiniMap />
                        <Controls position="top-left">
                            <ControlButton title="log" @click="testtest">
                                <v-icon>mdi-pencil</v-icon>
                            </ControlButton>
                        </Controls>
                    </VueFlow>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { ref } from 'vue'
import { db } from '@/firebase/init';
import { collection, addDoc, serverTimestamp, query, onSnapshot, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { VueFlow } from '@vue-flow/core';
import { MiniMap } from '@vue-flow/minimap';
import { Background } from '@vue-flow/background';
import { Controls, ControlButton } from '@vue-flow/controls';

export default {
    name: 'FoodWorld',
    components: {
        VueFlow,
        MiniMap,
        Background,
        Controls,
        ControlButton
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
            ],
            dark: ref(false)
        };
    },
    computed: {
        ...mapState(['user']),
        isDark() {
            return this.$vuetify.theme.current.dark.value;
        },
        reversedDinnerIdeas() {
            return this.dinnerIdeas.slice().reverse();
        }
    },
    methods: {
        testtest() {
            console.log("vvvvvvvv")
            console.log(this.nodes)
            console.log(this.edges)
            console.log("^^^^^^^^")
        },
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
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.39.0/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.39.0/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.vue-flow-container {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
}

html,
body,
#app {
    margin: 0;
    height: 100%;
}

#app {
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}

.basic-flow.dark {
    background: #2d3748;
    color: #fffffb
}

.basic-flow.dark .vue-flow__node {
    background: #4a5568;
    color: #fffffb
}

.basic-flow.dark .vue-flow__node.selected {
    background: #333;
    box-shadow: 0 0 0 2px #2563eb
}

.basic-flow .vue-flow__controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center
}

.basic-flow.dark .vue-flow__controls {
    border: 1px solid #FFFFFB
}

.basic-flow .vue-flow__controls .vue-flow__controls-button {
    border: none;
    border-right: 1px solid #eee
}

.basic-flow .vue-flow__controls .vue-flow__controls-button svg {
    height: 100%;
    width: 100%
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button {
    background: #333;
    fill: #fffffb;
    border: none
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button:hover {
    background: #4d4d4d
}

.basic-flow.dark .vue-flow__edge-textbg {
    fill: #292524
}

.basic-flow.dark .vue-flow__edge-text {
    fill: #fffffb
}
</style>
