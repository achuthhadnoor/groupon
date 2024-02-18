/**
 *
 * @param result response data from the query
 * @param query the search item
 * @returns the score depending on the Occurrence of the query
 */
export const calculateRelevanceScore = (
  result: { title: string; snippet: string },
  query: string | RegExp
) => {
  const titleOccurrences = (result.title.match(new RegExp(query, "gi")) || [])
    .length;
  const snippetOccurrences = (
    result.snippet.match(new RegExp(query, "gi")) || []
  ).length;
  const relevanceScore = titleOccurrences * 0.7 + snippetOccurrences * 0.3;

  return relevanceScore;
};
