import { createStore } from 'vuex';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/init';

export default createStore({
    state: {
        isDark: localStorage.getItem('isDark') === 'true' ? true : localStorage.getItem('isDark') === 'false' ? false : null,
        user: {
            loggedIn: false,
            data: null
        }
    },
    mutations: {
        toggleDarkMode(state, isDarkValue) {
            state.isDark = !isDarkValue;
            localStorage.setItem('isDark', state.isDark);
        },
        resetDarkMode(state) {
            state.isDark = null;
            localStorage.removeItem('isDark');
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    actions: {
        async signInWithGoogle(context) {
            const provider = new GoogleAuthProvider();
            try {
                const response = await signInWithPopup(auth, provider);
                if (response) {
                    context.commit('SET_USER', response.user);
                    context.commit('SET_LOGGED_IN', true);
                }
            } catch (error) {
                console.error('Authentication failed', error);
                throw new Error('Authentication failed');
            }
        },

        async signOut(context) {
            try {
                await signOut(auth);
                context.commit('SET_USER', null);
                context.commit('SET_LOGGED_IN', false);
            } catch (error) {
                console.error('Sign out failed', error);
                throw new Error('Sign out failed');
            }
        },

        async fetchUser(context, user) {
            context.commit("SET_LOGGED_IN", user !== null);
            if (user) {
                context.commit("SET_USER", user);
            } else {
                context.commit("SET_USER", null);
            }
        },
        initAuth({ commit }) {
            return new Promise((resolve, reject) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        commit('SET_USER', user);
                        commit('SET_LOGGED_IN', true);
                    } else {
                        commit('SET_LOGGED_IN', false);
                        commit('SET_USER', null);
                    }
                    resolve();
                }, reject);
            });
        }
    },
    modules: {},
});
