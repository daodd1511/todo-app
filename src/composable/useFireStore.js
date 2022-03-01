import { useStore } from "../store/store.js";
import { db } from "./useFirebase";
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
      store.$reset();
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (doc.id == uid && store.tasks.length == 0) {
          for (let task of doc.data().tasks) {
            store.tasks.push(task);
          }
          store.filteredTasks = store.tasks;
        }
      });
      const queryGetTheme = await getDocs(collection(db, "theme"));
      queryGetTheme.forEach((theme) => {
        if (theme.id == uid) {
          store.isDark = theme.data().theme;
        }
      });
    } catch (error) {
      console.log("Error handling document: ", error);
    }
  };
  const updateTheme = async (uid) => {
    const store = useStore();
    const theme = store.isDark;
    await setDoc(doc(db, "theme", uid), {
      theme,
    });
  };
  return { addData, readData, updateTheme };
};
export default useFireStore;
