import React from "react";
import { Card, Table } from "react-bootstrap";

const TableCard = ({ cardTitle, headers, rows }) => {
  return (
    <Card style={{ overflow: "auto" }}>
      <Card.Header>{cardTitle}</Card.Header>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row[0]}>
                {row.map(cell => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TableCard;
