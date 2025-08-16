import { createContext, useContext, useState } from "react";


// Creating the use context api
const LoginContext = createContext();
// create a component and using the LoginContext provider wraped child component to access the value 
export function LoginProvider({children}){
    const [user,setUser] = useState(null);

    return(
        <LoginContext.Provider value={{user,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin(){
    return useContext(LoginContext);
}
