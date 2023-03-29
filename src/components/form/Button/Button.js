import React from "react";

const Button = ({children}) => {
    return <>
        <button type="submit" className="btn btn-primary">{children}</button>
    </>
}

export default Button;
