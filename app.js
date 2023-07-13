
app = Vue.createApp({
    data() {
        return {
            colors: ['Red', 'Blue', 'Yellow'], // 単純な配列
            users: [ // オブジェクト配列
                { id: 1, name: 'John', age: 19 },
                { id: 2, name: 'Eric', age: 32 },
                { id: 3, name: 'Bill', age: 25 },
            ]
        };
    }
}).mount('#app');