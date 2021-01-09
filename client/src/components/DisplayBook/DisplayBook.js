import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function DisplayBook({ title, authors, description, link, image, Button }) {
    return (
        <ListItem>
            <Row>
                <Col size="md-10">
                    <h2>{title}</h2>
                </Col>
                <Col size="md-5">
                    <div>
                        <a target="_blank" rel="noopener noreferror" href={link}>
                            See Book
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p>By: {authors} </p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-6 md-2">
                    <img src={image} alt={title} />
                </Col>
                <Col size="12 sm-6 md-8">
                    <p>{description}</p>
                </Col>
            </Row>

        </ListItem>
    )
}

export default DisplayBook;