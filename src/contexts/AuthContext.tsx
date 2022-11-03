import { createContext, ReactNode, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface User {
  name: string;
  avatar: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextDataProps {
  user: User;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const authKey = AuthSession.makeRedirectUri({ useProxy: true });
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '244619104415-68lh3ifuv1oik5qqivrpeemd0f312goj.apps.googleusercontent.com',
    redirectUri: authKey,
    scopes: ['profile', 'email'],
  });

  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isUserLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
