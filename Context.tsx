import { createContext, useState, useEffect } from 'react';
import { client } from './pages/_app';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  isAuth: boolean;
  activateAuth: (token: string) => void;
  removeAuth: () => void;
};

export const Context = createContext<ContextType | null>(
  /* initial value */ null
);

const Provider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window === 'undefined') return false;
    //Si existe el token en el sessionStorage, devolvemos true
    return !!window.sessionStorage.getItem('token');
  });

  //A todo esto dentro de value tendremos acceso desde el context.consumer
  //El estado y el modificador del estado. A esto también puedo acceder con
  //useContext a través de Context.Consumer (ver LoginMutation.js)
  const value = {
    isAuth,
    activateAuth: (token: string) => {
      window.sessionStorage.setItem('token', token);
      setIsAuth(true);
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('token');
      setIsAuth(false);
    },
  };

  useEffect(() => {
    //Si el usuario se desloguea, reseteamos el store de apollo para que no queden los likes de las fotos en el localStorage
    client.resetStore();
  }, [isAuth]);

  // value es el valor que va a tener el contexto, Ahí podemos poner todo lo que necesitemos
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

//Exportamos provider y consumer

export default {
  //Provider es el componente que envuelve a toda la aplicación
  Provider,
  //Consumer es quien provee el valor del contexto
  Consumer: Context.Consumer,
};

//Context.Consumer (por defecto) genera una render prop
//donde la función children tiene acceso al value definido dentro del
//Context.Provider
