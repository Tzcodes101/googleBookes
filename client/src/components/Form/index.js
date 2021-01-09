import React from "react";

function Form({ q, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group">
                <label>
                    Book
                </label>
                <input className="form-control"
                    type="text"
                    value={q}
                    name="q"
                    onChange={handleInputChange}
                    required />
            </div>
            <div>
                <button
                    onClick={handleFormSubmit}
                    type="submit">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form;