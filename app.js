
app = Vue.createApp({
    data() {
        return { message: 'Hello Vue!'};
    },
    
methods: {
    sayGoodbye() {
        this.message = 'Goodbye Vue!';
    },
    changeMessage(message) {
        this.message = message;
    }
}
}).mount('#app');