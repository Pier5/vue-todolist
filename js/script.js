const app = new Vue ({
    el: '#app',
    data: {
        newTodo: '',
        arrTodo: [
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Fare il bucato',
                done: false,
            },
        ],
    },
    methods: {
        deleteTodo(index) {
            this.arrTodo.splice(index, 1);
        },
        addTodo() {
            if(this.newTodo.trim() != '') {
                this.arrTodo.unshift({text: this.newTodo, done: false});
                this.newTodo = '';
            }
        },
    }
})