import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-white  text-sm d-flex flex-col place-items-center items-center">
      <p>Error 404</p>
      <p>Sorry, This Page Is Not Found</p>
      <Link to={"/"} className="underline">Go Home</Link>
    </div>
  );
};

export default Error;
