import React, {useState, useMemo} from 'react';
import usersSession from "../mock/login.json";


const userContext = React.createContext();

export const UserProvider = (props) => {
  const [session, setSession] = useState(false);

  const login = (data) => {
    const user = usersSession.find(credential => credential.user === data.user && credential.password === data.password)
    if (user) {
      setSession(true)
    } else {
      alert('Contraseña incorrecta')
    }
  };

  const logout = () => {
    setSession(false);
  }

  const value = useMemo(() => {
    return {
      session,
      login,
      logout
    }
  }, [session]);

  return <userContext.Provider value={value}{...props}></userContext.Provider>
}

export const useUser = () => {
  const context = React.useContext(userContext);
  if (!context) {
    throw new Error('Proveedor')
  }
  return context;
}

