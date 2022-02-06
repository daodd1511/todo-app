import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
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
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(firebaseAuth, email);
  };
  return { login, register, logout, resetPassword };
};
export default useAuth;
