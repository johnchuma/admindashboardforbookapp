
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
export const login = async(email,password)=>{
    try {
    const response = await signInWithEmailAndPassword(auth,email,password)
   
      return response;
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const logout = async()=>{
    try {
     await auth.signOut()
    } catch (error) {
        console.error(error) 
        throw error
    }
}