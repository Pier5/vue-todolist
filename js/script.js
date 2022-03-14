// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere 
// il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo 
// corrispondente (se done era uguale a false, impostare true e viceversa)


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
                this.arrTodo.unshift({text: this.newTodo});
                this.newTodo = '';
            }
        },

    }
})