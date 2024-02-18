const typeDefs = `
  type Query {
    search(query: String!, limit: Int!, offset: Int): SearchResultConnection
  }
  type SearchResultConnection {
    totalCount: Int
    results: [SearchResultEdge]
    pageInfo: PageInfo
  }

  type SearchResultEdge {
    cursor: String!
    result: SearchResult
  }
  type SearchResult {
    title: String
    snippet: String
    url: String
  }
  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String
  }
`;

export default typeDefs;
