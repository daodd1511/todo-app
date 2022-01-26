import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./useFirebase";
const useAuth = () => {
  const login = async (email, password) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const logout = async () => {
    await signOut(firebaseAuth);
  };
  return { login, register, logout };
};
export default useAuth;
