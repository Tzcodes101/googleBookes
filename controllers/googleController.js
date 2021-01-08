const axios = require("axios");
const db = require("../models");

//define methods


module.exports = {
    //findAll searches entire API but returns ones not already saved (at some point in time)
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", { params })
            .then(results => results.data.items.filter(
                result =>
                    result.volumeInfo.title &&
                    result.volumeInfo.authos &&
                    result.volumeInfo.description &&
                    result.volumeInfo.infoLink
            ))
            .then(googleBooks => {
                    res.json(googleBooks)
                    .catch(err => res.status(422).json(err));
            })
        }
};