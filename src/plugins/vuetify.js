// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // All your Vuetify options go here
  theme: {
    defaultTheme: 'light', // Set the default theme
    themes: {
      light: {
        // Define your theme for light mode
        // Example: colors for the light theme
        colors: {
          primary: '#9ED5D6', // Example color
          // Add other colors as needed
        },
      },
      dark: {
        // Define your theme for dark mode
        // Example: colors for the dark theme
        colors: {
          primary: '#353F48', // Example color
          // Add other colors as needed
        },
      },
    },
  },
})
