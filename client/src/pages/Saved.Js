import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { List } from "../components/List";
import DisplayBook from "../components/DisplayBook/DisplayBook";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

class Saved extends Component {
    //set state for books (array)
    state = {
        books: []
    };

    //function to get saved books; from our own API, not google, so json structure returns data in form of our book model (relevant for info in BookDisplay later on )
    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    }


    //get saved books when component mounts
    componentDidMount() {
        this.getSavedBooks();
    }

    //function to delete a book, show only the books not deleted
    handleBookDelete = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks())
    };


    render() {
        return (
            // use grid system
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">React Google Books Search</h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <Card title="Saved Books">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <DisplayBook
                                            key={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            image={book.image}
                                            link={book.link}
                                            Button={() => (
                                                <button
                                                  onClick={() => this.handleBookDelete(book._id)}
                                                  className="btn btn-danger ml-2"
                                                >
                                                  Delete
                                                </button>
                                              )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h3>No Saved Books</h3>
                                )}
                        </Card>
                    </Col>
                </Row>


                <Footer />
            </Container>
        )
    }
}

export default Saved;