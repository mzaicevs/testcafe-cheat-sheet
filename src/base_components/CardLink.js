import React from "react";
import { Card } from "react-bootstrap";

const CardLink = ({ text, href, withPreceedingSpace, withSucceedingSpace }) => {
  let displayText = text;
  if (withPreceedingSpace) {
    displayText = ` ${displayText}`;
  }
  if (withSucceedingSpace) {
    displayText = `${displayText} `;
  }
  return (
    <Card.Link href={href} target="_blank" rel="noopener noreferrer">
      {displayText}
    </Card.Link>
  );
};
export default CardLink;
