app = Vue.createApp({
    data() {
        return { message: 'Hello Vue!' };
    },
    created() {
        console.log('A Vue instance was created.');
    },
    mounted() {
        console.log('The Vue instance was mounted.');
    }
}).mount('#app');