<template>
    <v-container>
        <v-form @submit.prevent="saveDate">
            <v-row>
                <v-col cols="6">
                    <v-date-picker v-model="selectedDate" label="Pick a Date" required></v-date-picker>
                </v-col>

                <v-col cols="6" class="text-center d-flex align-center justify-center">
                    <div v-if="progress !== null">
                        <v-progress-circular :model-value="parseFloat(progress.percentage)" size="350" width="30"
                            color="orange">
                            <div>
                                {{ progress.daysLeft }} days left</div>
                        </v-progress-circular>
                    </div>
                </v-col>
            </v-row>

            <v-text-field v-model="tag" label="Tag" required class="mt-4"></v-text-field>

            <v-btn type="submit" color="primary" class="mt-4" :disabled="!selectedDate || !tag">
                Save Date
            </v-btn>
        </v-form>

        <v-divider class="my-4"></v-divider>

        <h1>Saved Dates</h1>
        <v-row dense>
            <v-col cols="12" md="6" lg="4" v-for="date in savedDates" :key="date.id">
                <v-card class="pa-4" outlined>
                    <v-card-title class="text-h6">
                        {{ date.tag }}
                    </v-card-title>
                    <v-card-subtitle>{{ formatDate(date.date) }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn text color="blue" @click="calculateProgress(date.date, date.savedAt)">Show
                            Progress</v-btn>
                        <v-btn text color="red" @click="deleteDate(date.id)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { db } from '@/firebase/init';
import { collection, addDoc, deleteDoc, doc, query, onSnapshot, orderBy } from 'firebase/firestore';

export default {
    name: 'DatePickerApp',
    data() {
        return {
            selectedDate: null,
            tag: '',
            savedDates: [],
            progress: null
        };
    },
    methods: {
        async saveDate() {
            if (this.selectedDate && this.tag) {
                try {
                    await addDoc(collection(db, 'savedCountdownDates'), {
                        date: this.selectedDate,
                        tag: this.tag,
                        savedAt: new Date().toISOString(),
                    });
                    this.selectedDate = null;
                    this.tag = '';
                } catch (error) {
                    console.error('Error saving date:', error);
                }
            }
        },
        async deleteDate(id) {
            try {
                await deleteDoc(doc(db, 'savedCountdownDates', id));
            } catch (error) {
                console.error('Error deleting date:', error);
            }
        },
        formatDate(date) {
            if (!date) return '';
            const parsedDate = typeof date === 'string' ? new Date(date) : date.toDate?.() || date;
            return parsedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        },
        calculateProgress(targetDate, savedAt) {
            const now = new Date();
            const savedTime = new Date(savedAt);
            const target = new Date(targetDate);

            if (target < now) {
                this.progress = { percentage: 100, daysLeft: 0 };
                return;
            }

            const totalDuration = target - savedTime;
            const elapsedDuration = now - savedTime;

            const percentage = Math.min((elapsedDuration / totalDuration) * 100, 100).toFixed(2);
            const daysLeft = Math.ceil((target - now) / (1000 * 60 * 60 * 24));

            this.progress = {
                percentage,
                daysLeft,
            };
        }
    },
    mounted() {
        const q = query(collection(db, 'savedCountdownDates'), orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            this.savedDates = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                date: doc.data().date instanceof Object && doc.data().date.toDate ? doc.data().date.toDate() : doc.data().date,
            }));
        });
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
