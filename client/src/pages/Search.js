import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Form from "../components/Form";
import API from "../utils/API";
import { List } from "../components/List";
import DisplayBook from "../components/DisplayBook/DisplayBook";
import { Container, Row, Col } from "../components/Grid";

class Search extends Component {
    //create state for books, query, and message
    state = {
        books: [],
        q: "",
        prompt: "Enter a book to search for."
    };


    //component mounts
    //handleInputChange (when user searches for a book from the googleAPI)
    //change state with name to value
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //get books (from google)
    //set book state to response
    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    prompt: "Please try again"
                })
            );
    };


    //handleFormSubmit
    //call getBooks
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("clicked");
        this.getBooks();
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
        }).then(() => this.getBooks())
    };


    render() {
        return (
            //create grid
            <Container>
                {/* Keep Jumbo and Form in same grid system */}
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>React Google Book Search</h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="Search For a Book">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Search Results">
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
                                                className="btn btn-dark ml-2"
                                                    onClick={() => this.handleBookSave(book.id)}>Save Book</button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h3 className="text-center">{this.state.prompt}</h3>
                                )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Search;