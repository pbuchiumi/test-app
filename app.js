
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            isBlowup: false,
            vueLogo: '',
            visible: true
        }
    },
    methods: {
        change() {
            this.isBlowup = true;
            this.vueLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png';
            this.visible = false;
        }
    }
}).mount('#app');