import React from "react";
import { CardColumns, InputGroup, Form, Navbar } from "react-bootstrap";
import search_mappings from "./search/search_mappings";

const Search = ({ handleChange }) => (
  <InputGroup style={{ marginTop: "12px", marginBottom: "12px" }}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroupPrepend">
        <span role="img" aria-label="search">
          🔎
        </span>
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      type="text"
      placeholder="Search for ..."
      aria-label="inputGroupPrepend"
      onChange={e => handleChange(e.target.value)}
    />
  </InputGroup>
);

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      filterValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ filterValue: value });
  }

  render() {
    const filteredSearchComponents = search_mappings.filter(mapping => {
      let foundValue = false;
      for (const keyword of mapping.keywords) {
        if (keyword.includes(this.state.filterValue)) {
          foundValue = true;
          break;
        }
      }
      return foundValue;
    });

    const renderSearchComponents = mappingArray =>
      mappingArray.map(mapping => mapping.getComponent());

    return (
      <>
        <CardColumns>
          {this.state.filterValue
            ? // mapped only when there is a filter value
              renderSearchComponents(filteredSearchComponents)
            : // map everything by default
              renderSearchComponents(search_mappings)}
        </CardColumns>
        <Navbar bg="light" variant="light" fixed="bottom">
          <Navbar.Brand href="#home">TestCafe Cheat Sheet</Navbar.Brand>
          <Search handleChange={this.handleChange} />
        </Navbar>
      </>
    );
  }
}

export default CardContainer;
