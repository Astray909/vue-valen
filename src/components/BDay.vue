<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/bdayCat.png')" class="my-3" contain height="800" />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    HAPPY BIRTHDAY 🎂
                </h1>
                <v-btn color="primary" @click="toggleDialog">
                    Birthday balda will click here
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent max-width="600">
            <v-card>
                <v-card-title class="text-h5">
                    Happy Birthday
                </v-card-title>
                <v-card-text>
                    <v-img :src="require('../assets/pallas.png')" contain height="500" />
                </v-card-text>
                <v-card-text>
                    Happy 24th birthday!!! You are the most special bebe in every universe. Can't wait to spend
                    the next 240 years with you.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name: 'BdayWorld',
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        toggleDialog() {
            this.dialog = !this.dialog;
        },
    },
}
</script>
