'use client'
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { SearchHistoryProvider } from './historyProvider';

interface IProviderProps {
    children: React.ReactNode;
}

export default function Providers({ children }: IProviderProps) {

    const client = new ApolloClient({
        uri: 'http://localhost:3000/api/graphql',
        cache: new InMemoryCache()
    })
    return (
        <ApolloProvider client={client}>
            <SearchHistoryProvider>
                {children}
            </SearchHistoryProvider>
        </ApolloProvider>
    )
}
