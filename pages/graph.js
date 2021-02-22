import { ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from '@apollo/client'
import {AddBookForm} from '../components/AddBookForm'

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
        <div className="book-entry shadow-lg" key={title}>
            <div className="book-title">{title}</div>
            <div className="book-author">{author}</div>
        </div>
    ))
}

export default function Graph() {
    return (
<ApolloProvider client={client}>
<AddBookForm />

    <div className="book-list flex">
      <BookInfo />
    </div>


</ApolloProvider>
    )
}
