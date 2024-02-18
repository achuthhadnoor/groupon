import React, { createContext, useContext, useState } from 'react';

const SearchHistoryContext = createContext<any>(null);

export const SearchHistoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchHistory, setSearchHistory] = useState<string[] | []>([]);
    const addSearchTerm = (term: string) => {
        setSearchHistory((prevHistory: string[]) => {
            if (!prevHistory.includes(term)) {
                return [term, ...prevHistory];
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

// Custom hook to consume the search history context
export const useSearchHistory = () => useContext(SearchHistoryContext);
