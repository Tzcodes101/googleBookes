import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Form from "../components/Form";
import API from "../utils/API";
import { List } from "../components/List";
import DisplayBook from "../components/DisplayBook/DisplayBook";

class Search extends Component {
    //create state for books, query, and message
    state = {
        books: [],
        query: "",
        prompt: "Enter a book to search for."
    };


    //component mounts

    //get books (from google)
    //set book state to response
    getGoogleBooks = () => {
        API.getBooks(this.state.query)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    //handleInputChange (when user searches for a book from the googleAPI)
    //change state with name to value
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    //handleFormSubmit
    //call getBooks
    handleFormSubmit = e => {
        e.preventDefault();
        this.getGoogleBooks();
    };

    //saveBook
    //find book by id
    //use API.saveBook, putting in all needed info from the data object that we need for the Book model
    handleSaveBook = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            bookId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getGoogleBooks())
    };




    render() {
        return (
            //create grid
            <div>
                <Jumbotron>
                    <h1>React Google Book Search</h1>
                </Jumbotron>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    query={this.state.query}
                />
                <Card>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <DisplayBook
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                    Button={() => (
                                        <button
                                            onClick={() => this.handleBookSave(book.id)}>Save Book</button>
                                    )}
                                />
                            ))}
                        </List>
                    ) : (
                            <p>{this.state.prompt}</p>
                        )}
                </Card>
                <div>Search</div>
                <Footer />
            </div>
        )
    }
}

export default Search;