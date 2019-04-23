import React from "react";
import TableCard from "../../base_components/TableCard";
import CardLink from "../../base_components/CardLink";
import CodeHighlight from "../../base_components/CodeSyntaxHighlight";
import { browserSupport } from "../../snippets";

const BrowserSupportCard = () => (
  <TableCard
    cardTitle={
      <CardLink href={browserSupport.fullDocLink} text={browserSupport.title} />
    }
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
