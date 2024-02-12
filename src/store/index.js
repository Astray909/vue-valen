import { createStore } from 'vuex';

export default createStore({
    state: {
        isDark: localStorage.getItem('isDark') === 'true' ||
            (localStorage.getItem('isDark') === null &&
                window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
    },
    mutations: {
        toggleDarkMode(state) {
            state.isDark = !state.isDark;
            localStorage.setItem('isDark', state.isDark);
        },
    },
    actions: {},
    modules: {},
});
