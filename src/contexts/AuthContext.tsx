import { createContext, ReactNode } from 'react';

interface User {
  name: string;
  avatar: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextDataProps {
  user: User;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log('logou');
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'igor',
          avatar: 'https://github.com/vieiraigor8787.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
