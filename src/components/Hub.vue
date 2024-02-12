<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/angy_frog.png')" class="my-3" contain height="200" />
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <v-card class="mx-auto my-5" :style="{
                    backgroundColor: baldaBGC,
                    borderColor: baldaBDC,
                    borderWidth: '5px',
                    borderStyle: 'solid'
                }" rounded="lg" elevation="5" @click="navigateTo('/balda')">
                    <v-card-text class="d-flex flex-column align-center justify-center">
                        <v-icon size="56">mdi-hand-heart</v-icon>
                        <div class="mt-2">Will you be my balda?</div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <v-card class="mx-auto my-5" :style="{
                    backgroundColor: foodBGC,
                    borderColor: foodBDC,
                    borderWidth: '5px',
                    borderStyle: 'solid'
                }" rounded="lg" elevation="5" @click="navigateTo('/food')">
                    <v-card-text class="d-flex flex-column align-center justify-center">
                        <v-icon size="56">mdi-food-croissant</v-icon>
                        <div class="mt-2">What do you want for dinner?</div>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HubWorld',
    data() {
        return {
            baldaBGC: '#01BFBF',
            baldaBDC: '#F49880',
            foodBGC: '#FF9686',
            foodBDC: '#6C119C',
        };
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
        },
    },
}
</script>

<style></style>
