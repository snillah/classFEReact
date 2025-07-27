import { createContext, useState } from "react";



const LoginContext = createContext();

export function LoginProvider({children}){
    const [user,setUser] = useState(null);

    return(
        <LoginContext.LoginProvider value={{user,setUser}}>
            {children}
        </LoginContext.LoginProvider>
    )
}

export function useLogin(){
    return useContext(LoginContext);
}
