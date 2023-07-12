Vue.createApp({
    data(){
        return {
            userName: 'Evan'
        };
    },
methods: {
    sayHello() {
        retrun `Hello ${this.userName}!`;
    }
}
}) .mount('#app');
