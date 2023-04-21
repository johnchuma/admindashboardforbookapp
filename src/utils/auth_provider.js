
import React, { Children, createContext,useEffect,useState }  from 'react'
import { auth } from './firebase';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
     const unsubscribe= auth.onAuthStateChanged((user)=>{
            console.log(user)
            if(user){
                setCurrentUser(user)
            }
            else{
                setCurrentUser(null)
            }
        })
       return unsubscribe
    }, []);
    return <AuthContext.Provider value={{user:currentUser,setUser:setCurrentUser}} >
       {children}
    </AuthContext.Provider>
}

export default AuthProvider