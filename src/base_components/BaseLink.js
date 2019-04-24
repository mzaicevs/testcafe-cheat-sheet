import React from "react";

const BaseLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default BaseLink;
