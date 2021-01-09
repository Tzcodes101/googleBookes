import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { List } from "../components/List";
import DisplayBook from "../components/DisplayBook/DisplayBook";
import API from "../utils/API";

class Saved extends Component {
    //set state for books (array)
    state = {
        savedBooks: []
    };

    //function to get saved books; from our own API, not google, so json structure returns data in form of our book model (relevant for info in BookDisplay later on )
    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    savedBooks: res.data
                })
            )
            .catch(err => console.log(err));
    }


    //get saved books when component mounts
    componentDidMount() {
        this.getSavedBooks();
    }

    //function to delete a book, show only the books not deleted
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks())
    };


    render() {
        return (
            // use grid system
            <>
                <Jumbotron>
                    <h1>React Google Books Search</h1>
                </Jumbotron>
                <Card>
                    {this.state.savedBooks.length ? (
                        <List>
                            {this.state.savedBooks.map(savedBook => (
                                <DisplayBook
                                    key={savedBook.bookId}
                                    title={savedBook.title}
                                    authors={savedBook.authors}
                                    description={savedBook.description}
                                    image={savedBook.image}
                                    link={savedBook.link}
                                />
                            ))}
                        </List>
                    ) : (
                        <h3>No Saved Books</h3>
                    )}
                </Card>
                <div>Saved</div>
                <Footer />
            </>
        )
    }
}

export default Saved;