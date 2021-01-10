import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function DisplayBook({ title, authors, description, link, image, Button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-12">
                    <h2 className="font-italic">{title}</h2>
                </Col>
                <Col size="md-12">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferror" href={link}>
                            See Book
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic">Written By: {authors} </p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>

        </ListItem>
    )
}

export default DisplayBook;