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
                this.taskToDo.push(this.newTask);
            }
        }
    }
);