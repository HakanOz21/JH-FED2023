import { createContext, useState, useEffect } from "react";

export type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type AuthUser = {
  email: string;
  name: string;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

const localStorageKey = "authUser";

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider: React.FC<UserContextProviderType> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const storedUser = localStorage.getItem(localStorageKey);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(localStorageKey);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

/* import { createContext, useState } from "react";

export type UserContextType = {
  user: any;
  setUser: any;
};

type AuthUser = {
  email: string;
  name: string;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
 */