import { calculateRelevanceScore } from "../searhHelpers";

describe("calculateRelevanceScore", () => {
  it("calculates relevance score when query is found in title and snippet", () => {
    const result = {
      title: "Dynamics",
      snippet:
        'Look up <span class="searchmatch">dynamics</span> or dynamic in Wiktionary, the free dictionary. <span class="searchmatch">Dynamics</span> (from Greek δυναμικός dynamikos &quot;powerful&quot;, from δύναμις dynamis &quot;power&quot;) or dynamic',
    };
    const query = "Dynamics";
    const expectedScore = 1 * 0.7 + 2 * 0.3;
    expect(calculateRelevanceScore(result, query)).toBe(expectedScore);
  });
});
