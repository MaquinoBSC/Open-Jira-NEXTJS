import { createContext } from 'react';

interface ContextProps {
    prop1:  boolean;
}

export const NameContext = createContext({} as ContextProps);