<template>
    <v-navigation-drawer>
        <v-list dense>
            <v-list-item>
                <v-list-item-action class="d-flex align-center">
                    <v-switch insert :model-value="$root.isDark" @update:model-value="$emit('toggleDarkMode')"
                        label="Dark Mode"></v-switch>
                </v-list-item-action>
            </v-list-item>

            <v-list-item link :to="'/balda'">
                <v-list-item-action class="d-flex align-center">
                    <v-icon>mdi-hand-heart</v-icon>
                    <v-list-item-title class="ml-2">Balda</v-list-item-title>
                </v-list-item-action>
            </v-list-item>

            <v-list-item link :to="'/hello'">
                <v-list-item-action class="d-flex align-center">
                    <v-icon>mdi-test-tube</v-icon>
                    <v-list-item-title class="ml-2">Hello</v-list-item-title>
                </v-list-item-action>
            </v-list-item>

            <v-list-item link :to="'/hub'">
                <v-list-item-action class="d-flex align-center">
                    <v-icon>mdi-test-tube</v-icon>
                    <v-list-item-title class="ml-2">Hub World</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
};
</script>

<style scoped></style>
