import { defineStore } from "pinia";
import useFireStore from "../composable/useFireStore";
const { addData } = useFireStore();
export const useStore = defineStore("main", {
  state: () => {
    return {
      tasks: [],
      filteredTasks: [],
      counter: 0,
      isDark: false,
      activeEl: 0,
      activeTask: [],
      completedTask: [],
    };
  },
  getters: {},
  actions: {
    addTask(task) {
      if (task != "") {
        this.tasks = [{ content: task, done: false }, ...this.tasks];
        this.counter++;
        this.filteredTasks = this.tasks;
        this.activeEl = 0;
      }
    },
    removeTask(task, uid) {
      // this.tasks.splice(this.tasks.indexOf(task), 1);
      this.tasks = this.tasks.filter((value) => {
        return value != task;
      });
      this.filteredTasks = this.tasks;
      if (!task.done) {
        this.counter--;
      }
      addData(this.tasks, uid);
    },
    filterTask(item) {
      this.activeEl = item.id;
      this.filteredTasks = this.tasks.filter((value) => {
        if (item.name == "Active") {
          return value.done == false;
        } else if (item.name == "Completed") {
          return value.done == true;
        } else if (item.name == "All") {
          return value;
        }
      });
    },
    toggleTask(task) {
      task.done = !task.done;
      if (task.done == true) {
        this.counter--;
      } else {
        this.counter++;
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
});
