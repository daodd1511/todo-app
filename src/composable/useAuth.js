import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./useFirebase";

const isAuthenticated = ref(false);
const user = ref("");

const useAuth = () => {
  const login = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };
  const register = async (email, password) => {
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };
  const logout = async () => {
    await signOut(firebaseAuth);
    isAuthenticated.value = false;
    user.value = "";
  };
  return { isAuthenticated, login, register, logout, user };
};
export default useAuth;
