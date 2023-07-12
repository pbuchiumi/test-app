Vue.createApp({
    data() { 
        return {
            userName: 'Evan'
        };
    },
    methods: {
        sayHello() {
            return `Hello ${this.userName}!`;
        }
    }
}).mount('#app');