import { gql, useMutation } from '@apollo/client';

class AddBookForm extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    title: "",
    author: ""
  }
}

  handleInputChange(e) {
    const target = e.target
    const value = target.val
  }

 ADD_BOOK = gql`
    mutation Mutation {
      addBook(title: $title, author: $title) {
        id
        title
        author
      }
    }

  `

  [addBook, {data} ] = useMutation(ADD_BOOK)


  render = () => {
    return (
      <>
      <form onSubmit = { e => {
        e.preventDefault()
        addBook({variables: {type}})

      } }>
      <label for="title">Title</label><br />
      <input type="text" id="title" name="title" /><br />
      <label for="author">Author</label><br />
      <input type="text" id="author" name="author" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
      </>
    )

  }

}

export const AddBookForm
