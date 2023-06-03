"use client";
import { useMemo, createContext, useState, useEffect, useContext, useCallback } from "react";
import PocketBase from 'pocketbase';

const BASE_URL = 'http://127.0.0.1:8090';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const pb = useMemo(() => new PocketBase(BASE_URL), []);

    const [user, setUser] = useState(pb.authStore.model);
    const [token, setToken] = useState(pb.authStore.token);

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token);
            setUser(model);
        });
    }, []);

    const signup = useCallback(async (email, password, passwordConfirm) => {
        return await pb.collection('users').create({
            email,
            password,
            passwordConfirm,
        });
    }, []);

    const login = useCallback(async (email, password) => {
        pb.authStore.clear();
        return await pb.collection('users').authWithPassword(email, password);
    }, []);

    const logout = useCallback(async () => {
        pb.authStore.clear();
    }, []);

    return (
        <UserContext.Provider value={{ user, token, signup, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);