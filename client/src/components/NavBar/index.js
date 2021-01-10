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


    render() {
        return (
            <div>I am going to be a fancy nav...one day!</div>
        )
    }
}

export default NavBar;