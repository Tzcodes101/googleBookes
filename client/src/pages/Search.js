import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Search extends Component {
    //create state for books, q, and message


    //component mounts

    //get books (from google)
        //set book state to response

    //handleInputChange (when user searches for a book from the googleAPI)
        //change state with name to value

    //handleFormSubmit
        //call getBooks

    //saveBook
        //find book by id
        //use API.saveBook, putting in all needed info from the data object that we need for the Book model

    


    render() {
        return (
            //create grid
            <div>
            <Jumbotron>
                <h1>React Google Book Search</h1>
            </Jumbotron>
            {/* Form to Search */}
            {/* Card to display results */}
            <div>Search</div>
            <Footer />
            </div>
        )
    }
}

export default Search;