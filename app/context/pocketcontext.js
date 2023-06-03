"use client";
import { useMemo, createContext, useState, useEffect, useContext, useCallback } from "react";
import PocketBase from 'pocketbase';

const BASE_URL = 'http://127.0.0.1:8090';
const PocketContext = createContext();

export const PocketProvider = ({ children }) => {
    const pocketbase = useMemo(() => new PocketBase(BASE_URL), []);

    const [ pb, setPb ] = useState(pocketbase);

    useEffect(() => {
        return setPb(pocketbase);
    }, []);

    return (
        <PocketContext.Provider value={{ pb }}>
            {children}
        </PocketContext.Provider>
    );
};

export const usePocket = () => useContext(PocketContext);