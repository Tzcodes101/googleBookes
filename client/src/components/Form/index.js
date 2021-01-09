import React from "react";

function Form(props) {
    return (
        <form>
            <div className="form-group">
                <label>
                    Book
                </label>
                <input className="form-control" />
            </div>
            <div>
                <button>
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form;