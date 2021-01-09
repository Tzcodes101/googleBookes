import axios from "axios";

export default {
    //books from the google API
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q} });
    },

    //get saved books (our own "api")
    getSavedBooks: function() {
        return axios.get("/api/books");
    },

    //delete saved book (based off id)
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    //save book to database (the "api" we create)
    saveBook: function(bookInfo) {
        return axios.post("/api/books", bookInfo);
    }
}