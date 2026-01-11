"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
    isLoginOpen: boolean;
    openLogin: () => void;
    closeLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const openLogin = () => setIsLoginOpen(true);
    const closeLogin = () => setIsLoginOpen(false);

    return (
        <AuthContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
