import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Title</h3>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card;