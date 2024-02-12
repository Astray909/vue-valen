<template>
  <v-container>
    <v-form @submit.prevent="savePost">
      <v-text-field v-model="title" label="Title" required></v-text-field>
      <v-textarea v-model="content" label="Content" required></v-textarea>
      <v-btn type="submit" color="primary">Create Post</v-btn>
    </v-form>

    <v-divider class="my-4"></v-divider>

    <v-list dense>
      <h1>Recent Posts</h1>
      <v-list-item v-for="post in posts" :key="post.id">
        <v-col>
          <v-list-item-title>{{ post.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ post.content }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ formatDate(post.createdAt?.toDate()) }}</v-list-item-subtitle>
        </v-col>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import db from '@/firebase/init'
import { collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from 'firebase/firestore'

export default {
  name: 'HelloWorld',
  data() {
    return {
      title: '',
      content: '',
      posts: []
    }
  },
  methods: {
    async savePost() {
      try {
        await addDoc(collection(db, "posts"), {
          title: this.title,
          content: this.content,
          createdAt: serverTimestamp()
        });
        this.title = '';
        this.content = '';
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    formatDate(date) {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      });
    }
  },
  mounted() {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      this.posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt ? doc.data().createdAt : null
      }));
    });
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
