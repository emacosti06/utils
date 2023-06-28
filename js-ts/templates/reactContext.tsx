import { createContext, useCallback, useContext, useState } from "react";

type ContextState = {
    state?: string
    setState: (state: string) => void
}

const Context = createContext<ContextState>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<string>(null);

    
    return (
        <Context.Provider value={{ state, setState}}>
            {children}
        </Context.Provider>
    );
};

function useContext() {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useContext must be used within a Context');
    }
    return context;
}

export { ContextProvider, useContext };