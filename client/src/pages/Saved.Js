import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Saved extends Component {
//set state for books (array)

//function to get saved books

//get saved books when component mounts

//function to delete a book


    render() {
        return (
            // use grid system
            <>
            <Jumbotron>
                <h1>React Google Books Search</h1>
            </Jumbotron>
            {/* card to display saved books */}
            <div>Saved</div>
            <Footer />
            </>
        )
    }
}

export default Saved;