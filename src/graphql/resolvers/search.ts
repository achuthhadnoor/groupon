import { calculateRelevanceScore } from "@/utils/searhHelpers";
import axios from "axios";

const resolvers = {
  Query: {
    search: async (_: any, { query, limit, offset }: any) => {
      const apiKey: string = process.env.WIKI_URL || "";
      try {
        const response = await axios.get(apiKey, {
          params: {
            action: "query",
            list: "search",
            format: "json",
            srsearch: query,
            srlimit: limit,
            sroffset: offset || 0,
          },
        });

        const resultsWithRelevance = response.data.query.search.map(
          (result: any) => ({
            ...result,
            relevanceScore: calculateRelevanceScore(result, query),
          })
        );

        const sortedResults = resultsWithRelevance.sort(
          (a: { relevanceScore: number }, b: { relevanceScore: number }) =>
            b.relevanceScore - a.relevanceScore
        );

        const totalCount = response.data.query.searchinfo.totalhits;
        const hasNextPage = offset + limit < totalCount;
        const endCursor = hasNextPage ? offset + limit : null;
        const edges = sortedResults.map(
          (result: {
            pageid: any;
            relevanceScore: any;
            title: string | number | boolean;
            snippet: any;
          }) => ({
            cursor: result.pageid, // Using pageid as cursor, you can choose a different unique identifier
            relevanceScore: result.relevanceScore,
            node: {
              title: result.title,
              snippet: result.snippet,
              url: `https://en.wikipedia.org/wiki/${encodeURIComponent(
                result.title
              )}`,
            },
          })
        );
        return {
          totalCount,
          edges,
          pageInfo: {
            hasNextPage,
            endCursor,
          },
        };
      } catch (error) {
        console.error("Error fetching Wikipedia search:", error);
        throw new Error("Error fetching Wikipedia search");
      }
    },
  },
};
export default resolvers;
