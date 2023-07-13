
app = Vue.createApp({
    data() {
        return { message: 'Hello Vue!'};
    },
    
methods: {
    sayGoodbye() {
        this.message = 'Goodbye Vue!';
    },
    changeMessage(event,message) {
        
this.message = message;
    console.log(event.type);
    console.log(event.target);
    // すべてのイベント･プロパティを参照
    // for (let prop in event) {
    //     console.log(prop + ': ' + event[prop]);
    // }
}
}
}).mount('#app');