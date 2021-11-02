Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            newTask: "",
            taskToDo: [
                'fare',
                'banca'
            ]
        },
        methods: {
            onAddClick(){
                //se elemento e vuoto non lo aggiungo alla lista
                if(this.newTask.trim() === "" ) {
                    return;
                }
                //verifico se elemento da aggungere è presente nella lista se si lo push
                const sameTask = this.taskToDo.some((el) => {
                    return el.toLowerCase() === this.newTask.trim().toLowerCase();
                });
                if(sameTask) {
                    return;
                }
                this.taskToDo.push(this.newTask);
            }
        }
    }
);