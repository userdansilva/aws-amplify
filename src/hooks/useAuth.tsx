import {
  createContext, ReactNode, useCallback, useContext, useMemo,
} from "react";

interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  signIn: (data: SignInProps) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const isAuthenticated = false;

  const signIn = useCallback(({ email, password }: SignInProps) => {
    console.log(email, password);
  }, []);

  const value = useMemo(() => ({
    signIn, isAuthenticated,
  }), [signIn, isAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = (): AuthContextProps => useContext(AuthContext);

export { AuthProvider, useAuth };
