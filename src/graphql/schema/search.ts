const typeDefs = `
  type Query {
    search(query: String!, limit: Int!, offset: Int): SearchResultConnection
  }
  type SearchResultConnection {
    totalCount: Int
    edges: [SearchResultEdge]
    pageInfo: PageInfo
  }

  type SearchResultEdge {
    cursor: String!
    node: SearchResult
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
