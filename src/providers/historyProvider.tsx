'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const SearchHistoryContext = createContext<any>(null);

export const SearchHistoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchHistory, setSearchHistory] = useState<string[] | []>([]);
    useEffect(() => {
        if (window) setSearchHistory(JSON.parse(localStorage.getItem('search-history') || '[]'));
    }, [])

    const addSearchTerm = (term: string) => {
        setSearchHistory((prevHistory: string[]) => {
            if (!prevHistory.includes(term)) {
                const newState = [term, ...prevHistory];
                localStorage.setItem('search-history', JSON.stringify(newState))
                return newState;
            } else {
                return prevHistory;
            }
        });
    };

    const clearSearchHistory = () => {
        setSearchHistory([]);
    };

    return (
        <SearchHistoryContext.Provider value={{ searchHistory, addSearchTerm, clearSearchHistory }}>
            {children}
        </SearchHistoryContext.Provider>
    );
};
export const useSearchHistory = () => useContext(SearchHistoryContext);
