import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext({
    user: {},
    token: {},
    isLoggedIn: false,
    isLoading: false,
    feedback: {
        show: false,
        message: '',
        type: '',
    },
    ui: {},
});

AuthContext.displayName = 'Authentification'

function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState({
        show: false,
        msg: '',
        type: '',
    });

    const isLoggedIn = !!user

    const authCtx = {
        user,
        isLoading,
        isLoggedIn,
        feedback,
    }

return (
<AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
);
}

export default AuthProvider;

export function useAuthCtx() {
    return useContext(AuthContext)
}