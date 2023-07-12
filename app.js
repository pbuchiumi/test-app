const dataObj = {
    message: 'Hello Vue',
    userName: 'Evan'
};

const app = Vue.createApp({
    data: () => dataObj
}).mount('#app');
