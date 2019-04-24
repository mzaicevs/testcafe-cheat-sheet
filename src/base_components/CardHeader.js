import React from "react";
import { Card, Button } from "react-bootstrap";
import BaseLink from "./BaseLink";

const CardHeader = ({ docLink, title }) => (
  <Card.Header>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {title}
      {docLink && (
        <BaseLink href={docLink}>
          <Button variant="info">Documentation</Button>
        </BaseLink>
      )}
    </div>
  </Card.Header>
);

export default CardHeader;
