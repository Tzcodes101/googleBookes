import React from "react";

//create bootstrap container; able to adjust fluidity 
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


//create bootstrap row, able to adjust fluidity
export function Row({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


//create bootstrap column, able to adjust size
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >{children}</div>
    );
}