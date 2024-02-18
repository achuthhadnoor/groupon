<div align="center">
    <h1 align="center">Wikipedia search and analysis tool</h1>
</div>

### services

To install the dependencies please follow the below steps

- ensure you have node installed

    ```sh-session
    node -v
    ```

### Environmental variables

`.env.local` has the `url` for wikipedia api that can be used to query the data

### Tools and technologies used

1) [Typescript]()

2) [NextJs](https://nextjs.org/) : Framework

3) [Graphql](https://graphql.org/): Query language

4) [Apollo Graphql](apollographql.com): Apollo Graphql for graphql client and server support

5) [Tailwind css](https://tailwindcss.com/): Tailwind css for styling and building minimal UI

### Why this stack?

I have chose to use `@apollo/server` and `@apollo/client` in `Nextjs` with `app-rounter` because `Nextjs` is a
powerful combination for building modern web applications with efficient development workflows and high-performance user interface.

It comes with support like built in Built-in Optimizations

1) Automatic Image,
2) Font, and Script Optimizations for improved UX and Core Web Vitals. <br/>
3) Data Fetching <br/>
4) Server Actions <br/>
5) Advanced Routing & Nested Layouts, <br/>
6) Client and Server Rendering etc.

### Providers

Providers are part of state management solution by react where you pass a context and then modify the data across the components

1) `ApolloProvider`: For creating an `@apollo/client` and then a context 

2) `HistoryProvider`: used to save the search history of the user.

### Hooks

`useDebounce` : For implementatino of debounce in the search box

`searchWikiapi`: For handling the wikipedia api with client creation from `@apollo/client`.

### Flow

1) Created a graphql server at `api/graphql`

2) user will enter the search query

3) The results are fetched from @apollo/server in relevance-based sorting

4) A loader is shown as user can understand that data is being fetched.

5) The search history is logged.

6) Pagination support in the api to help improve the performance of the app.