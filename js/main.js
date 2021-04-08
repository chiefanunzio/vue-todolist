function init() {

    new Vue({
        'el': '#app',
        'data': {
            toDoList: [
                'cose da fa casa',
                'cose da fa ufficio',
                'cose da fa lavoro',
                'cose da fa cazzeggio'
            ],
            nuovoTask:'',
        },
        methods: {

            rimuoviTodo: function (parametroIndice) {

                this.toDoList.splice(parametroIndice, 1);
            },
            addTask: function () {

                if (this.nuovoTask.length > 0){
                    this.toDoList.push(this.nuovoTask);
                    this.nuovotask = "";
                }else{
                    console.log('non hai scritto bro');
                }

            }



        }
    });
}
    document.addEventListener('DOMContentLoaded', init)