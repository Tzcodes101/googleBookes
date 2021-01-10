import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class NavBar extends Component {

    state = {
        open: false,
        width: window.innerWidth
    }

    //change window width state depending on windoe size 
    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    //set state of open to the opposite of it's current state
    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    //when component mounts, resize depending on window width
    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    };

    //when component will unmount, resize depending on window width
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    //render navBar from bootstrap
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* anchor tags become Link and href becomes to */}
                <Link className="navbar-brand" to="/">
                    Google Books
                </Link>
                {/* change open state for that page when link is clicked */}
                <button
                    onClick={this.toggleNav}
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span classsName="navbar-toggler"></span>
                </button>
                {/* if open state is true, then class is empty, else navBar is collapsed */}
                <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                                to="/"
                            >
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNav}
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                to="/saved"
                            >
                                Saved
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;