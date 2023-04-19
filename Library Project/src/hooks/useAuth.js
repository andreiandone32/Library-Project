import {
    useState
} from "react";
import {
    login as loginService
} from "../services/auth"
import {
    useLocalStorage
} from "./useLocalStorage";
import {
    useEffect
} from "react";
import {
    handleTokenUpdate
} from "../services/utils";
import {
    useLayoutEffect
} from "react";

const initalAuth = {
    user: null,
}

export function useAuth() {
    const [{
        user,
        token
    }, setUser] = useLocalStorage("library-user", initalAuth);

    useLayoutEffect(() => {
        handleTokenUpdate(token);
    }, [token])



    async function login(credentials) {
        try {
            const userInfo = await loginService(credentials);
            console.log(userInfo);
            setUser(userInfo);
        } catch (error) {
            throw error.data.message || "Error";
        }

    }

    function logout() {
        setUser(initalAuth)
    }


    return {
        user,
        login,
        logout
    }
}