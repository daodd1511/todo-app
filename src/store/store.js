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
      this.filteredTasks = this.tasks.filter((task) => {
        if (item.name == "Active") {
          return task.done == false;
        } else if (item.name == "Completed") {
          return task.done == true;
        } else if (item.name == "All") {
          return task;
        }
      });
    },
    toggleTask(task, uid) {
      task.done = !task.done;
      if (task.done == true) {
        this.counter--;
      } else {
        this.counter++;
      }
      addData(this.tasks, uid);
    },
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
});
