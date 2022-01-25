import { ref } from "vue";
import { useStore } from "../store/index.js";
import { db, firebaseAuth } from "./useFirebase";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
const useFireStore = () => {
  const addData = async (tasks, uid) => {
    try {
      await setDoc(doc(db, "users", uid), {
        tasks,
      });
    } catch (error) {
      console.log("Error handling document: ", error);
    }
  };
  const readData = async (uid) => {
    try {
      const store = useStore();
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (doc.id == uid && store.tasks.length == 0) {
          for (let task of doc.data().tasks) {
            store.tasks.push(task);
          }
          store.filteredTasks = store.tasks;
        }
      });
    } catch (error) {
      console.log("Error handling document: ", error);
    }
  };
  return { addData, readData };
};
export default useFireStore;
