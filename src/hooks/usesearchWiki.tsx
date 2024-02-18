import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_QUERY } from "@/graphql/queries/search";
import { useSearchHistory } from "@/providers/historyProvider";
import SearchHistory from "@/components/SearchHistory";

const useWikiSearch = (searchTerm: string, limit: number) => {
    const { addSearchTerm } = useSearchHistory();
    const { loading, error, data, fetchMore } = useQuery(SEARCH_QUERY, {
        variables: { query: searchTerm, limit, offset: 0 }
    })

    useEffect(() => {
        if (!loading && data) {
            addSearchTerm(searchTerm);
        }
    }, [loading])

    const nextPage = () => {
        fetchMore({
            variables: {
                offset: data.search.pageInfo.endCursor,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                    search: {
                        ...fetchMoreResult.search,
                        edges: fetchMoreResult.search.edges,
                        // edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
                    },
                };
            },
        });
    }
    const prevPage = () => {

    }
    return {
        data,
        loading,
        error,
        nextPage,
        prevPage
    }
}

export default useWikiSearch;