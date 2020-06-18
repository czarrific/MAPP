import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () =>{
    return(
        <div>
            <h2>ERROR404</h2>
            <h3><span className="font-weight-bold">Web Page not found.         </span><Link to ="/login">Go Back to Login.</Link></h3>
        </div>
    );
};

export default NotFoundPage;