import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({
        token: undefined,
    }),
    // getters
    getters: {
        logined: (state): boolean => {
            return state.token !== undefined
        },
    },
    actions: {
        login(token): boolean {
            if (token == undefined) {
                return false;
            }
            this.token = token;
            return true;
        },
        logout() {
            this.token = undefined
        }
    },
    persist: true
})