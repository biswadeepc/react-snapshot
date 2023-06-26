import React from "react";

const Image = ({ url, altTag }) => (
  <li>
        <img src={url} alt={altTag} />
  </li>
);

export default Image;
