<template>
    <v-container fluid>
        <div class="d-flex flex-wrap align-center justify-space-between">
            <div class="flex-grow-1 mx-2 my-2 text-center d-flex align-center justify-center">
                <v-progress-circular :model-value="parseFloat(progress.percentage)" size="350" width="30"
                    color="orange">
                    <div>
                        <div v-if="isNaN(progress.daysLeft)">
                            <div style="font-size: 2.5em; font-weight: bold;">
                                :3
                            </div>
                            <div style="font-size: 1em;">
                                meow meow meow
                            </div>
                        </div>
                        <div v-else>
                            <div style="font-size: 2.5em; font-weight: bold;">
                                {{ progress.daysLeft >= 0 ? progress.daysLeft : Math.abs(progress.daysLeft) }}
                            </div>
                            <div style="font-size: 1em;">
                                {{ progress.daysLeft >= 0 ? 'days left' : 'days ago' }}
                            </div>
                        </div>
                    </div>
                </v-progress-circular>
            </div>
        </div>

        <v-btn color="pink" @click="popDialog()" class="mt-4">Add Date</v-btn>

        <v-dialog v-model="showDialog" :fullscreen="isMobile" max-width='1000px'>
            <v-card>
                <v-card-title class="text-h6 d-flex justify-space-between align-center">
                    Add a New Date
                    <v-btn icon @click="hideDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="saveDate">
                        <div class="d-flex justify-center">
                            <v-date-picker v-model="selectedDate" label="Pick a Date" required></v-date-picker>
                        </div>
                        <v-text-field v-model="tag" label="Tag" required class="mt-4"></v-text-field>
                        <v-btn type="submit" color="primary" class="mt-4" :disabled="!selectedDate || !tag">
                            Save Date
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

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
                        <v-btn text color="blue" @click="calculateProgress(date.date, date.savedAt)">
                            Show Progress
                        </v-btn>
                        <v-btn text color="red" @click="deleteDate(date.id)">
                            Delete
                        </v-btn>
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
            progress: {},
            showDialog: false,
            isMobile: window.innerWidth <= 1000
        };
    },
    methods: {
        popDialog() {
            this.showDialog = true;
        },
        hideDialog() {
            this.showDialog = false;
        },
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
                    this.showDialog = false;
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
                const daysAgo = Math.floor((now - target) / (1000 * 60 * 60 * 24));
                this.progress = { percentage: 100, daysLeft: -daysAgo };
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
        },
        updateIsMobile() {
            this.isMobile = window.innerWidth <= 1000;
        }
    },
    mounted() {
        const q = query(collection(db, 'savedCountdownDates'), orderBy('date', 'asc'));
        onSnapshot(q, (snapshot) => {
            this.savedDates = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                date: doc.data().date instanceof Object && doc.data().date.toDate ? doc.data().date.toDate() : doc.data().date,
            }));
        });
        window.addEventListener('resize', this.updateIsMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
