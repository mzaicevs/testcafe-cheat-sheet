import React from "react";
import { Card, Table } from "react-bootstrap";
import CardHeader from "../base_components/CardHeader";

const TableCard = ({ cardTitle, fullDocLink, headers, rows }) => {
  return (
    <Card style={{ overflow: "auto" }}>
      <CardHeader title={cardTitle} docLink={fullDocLink} />
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
