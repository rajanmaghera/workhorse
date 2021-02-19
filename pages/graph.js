import { ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

const BOOK_INFORMATION = gql`
    query getBook{
        books{
            title
            author
        }
    }
    `

function BookInfo() {
    const {loading, error, data} = useQuery(BOOK_INFORMATION)

    if (loading) return <p> Loading...</p>
    if (error) return <p>Error :(</p>

    return data.books.map(({title, author}) => (
        <ApolloProvider client={client}>
        <div key={title}>
            <p>Book Title: {title}</p>
            <p>Book Author: {author}</p>
        </div></ApolloProvider>
    ))
}

export default function Graph() {
    return (
<ApolloProvider client={client}>
    <BookInfo />

</ApolloProvider>
    )
}