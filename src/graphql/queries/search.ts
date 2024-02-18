import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query Search($query: String!, $limit: Int!, $offset: Int) {
    search(query: $query, limit: $limit, offset: $offset) {
      totalCount
      edges {
        cursor
        node {
          title
          snippet
          url
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
