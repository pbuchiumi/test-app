
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            visible: true
        }
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
}).mount('#app');