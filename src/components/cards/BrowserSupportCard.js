import React from "react";
import TableCard from "../../base_components/TableCard";
import { CodeHighlight } from "../../base_components/CodeHighlight";
import { browserSupport } from "../../snippets";

const BrowserSupportCard = () => (
  <TableCard
    cardTitle={browserSupport.title}
    headers={["Browser", "Alias"]}
    rows={browserSupport.browsers.map(browser => [
      browser.text,
      browser.aliases.map(alias => (
        <CodeHighlight key={alias} language="plaintext">
          {alias}
        </CodeHighlight>
      ))
    ])}
  />
);
export default BrowserSupportCard;
