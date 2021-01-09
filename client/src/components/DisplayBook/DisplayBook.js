import React from "react";
import { ListItem } from "../List";

function DisplayBook({ title, authors, description, link, image }) {
    return (
        <ListItem>
            <h2>{title}</h2>
            <div>
                <a target="_blank" rel="noopener noreferror" href={link}>
                    See Book
                </a>
               
            </div>
            <p>By: {authors} </p>
            <img src={image} alt={title} />
            <p>{description}</p>

        </ListItem>
    )
}

export default DisplayBook;