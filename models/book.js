//dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//book schema with title, authors, link, despcription, image
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: [String], required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

//set schema as a const
const Book = mongoose.model("Book", boookSchema);

//export book
module.exports = Book; 