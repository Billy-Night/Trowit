import { createContext } from "react";

export const AuthContext = createContext({ authToken: null, setAuthToken: (token) => null });
