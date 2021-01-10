import React from "react";

function Form({ q, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Search">
                    <strong>Enter Title Below</strong>
                </label>
                <input className="form-control"
                    id="search-title"
                    type="text"
                    value={q}
                    name="q"
                    placeholder="Into the Wild"
                    onChange={handleInputChange}
                    required 
                />
            </div>
            <div className="pull-right">
                <button
                    className="btn btn-dark float-right"
                    onClick={handleFormSubmit}
                    type="submit">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form;