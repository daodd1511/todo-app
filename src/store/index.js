import { defineStore } from "pinia";
export const useStore = defineStore('main', {
    state: () => {
        return {
            tasks: [],
            filteredTasks: [],
            counter: 0,
            isDark: false,
            activeEl: 0,
        }
    },
    actions: {
        addTask (task) {
            if(task!=""){
                this.tasks = [{content:task, done: false}, ...this.tasks];
                this.counter++;
                this.filteredTasks = this.tasks;
                this.activeEl = 0;
            }
        },
        removeTask (task){
            // this.tasks.splice(this.tasks.indexOf(task), 1);
            this.tasks = this.tasks.filter((value)=>{
                return value!=task;
            })
            this.filteredTasks = this.tasks;
            if(!task.done){this.counter--};
        },
        toggleTask (task) {
            if(task.done){
                this.counter++;
            }
            else{
                this.counter--;
            }
            task.done = !task.done;
        },
        toggleTheme (){
            this.isDark = !this.isDark;
        }
    },
})