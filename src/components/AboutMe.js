import React from "react";
import { Card, ListGroup, CardDeck } from "react-bootstrap";
import LinkedInBadge from "./LinkedInBadge";
import CardLink from "../base_components/CardLink";

const WhatIsThisCardContent = () => (
  <Card.Body>
    <Card.Title>What is this?</Card.Title>
    <Card.Text>
      If you haven't guessed by now, this web app is designed as a Cheat Sheet
      to TestCafe. It's aim is to accelerate your usage of TestCafe with quick
      information. It's not designed to be a replacement for TestCafe's
      documentation, but rather a quick "what was that thing again?" answer
      book.
    </Card.Text>
    <Card.Text>
      Maybe the Jumbotron above wasn't as explicit as I had intended?
      <span role="img" aria-label="thinking-face">
        {" "}
        🤔
      </span>
    </Card.Text>
  </Card.Body>
);

const WhoCreatedThisCardContent = () => (
  <Card.Body>
    <Card.Title>Who created this... thing?</Card.Title>
    <Card.Text>All blame can be pointed to:</Card.Text>
    <LinkedInBadge />
  </Card.Body>
);

const WhyWasThisCreatedCardContent = () => (
  <Card.Body>
    <Card.Title>Why would you create this?</Card.Title>
    <Card.Text>A number of reasons, really. The big drivers were:</Card.Text>
    <ul>
      <li>
        <Card.Text>
          I had started innovating at work with TestCafe on a front-end offering
          and constantly read and referred back to the TestCafe documentation,
          often for the next tidbit of information I needed. In fairness to the
          TestCafe maintainers, their documentation is nicely laid out and their
          search bar is super helpful. I just wanted to be selfish and have what
          I thought as the important information in a single page that I could
          refer back to with ease.
        </Card.Text>
      </li>
      <li>
        <Card.Text>
          <>
            I feel a sense of personal aimlessness if I'm not pumping out code
            or projects every so often. Partly inspired by
            <CardLink
              href="https://devhints.io/"
              text="devhints.io"
              withPreceedingSpace
            />
            ; I found an excuse to actually read the TestCafe docs more
            in-depth, experiment more with component libraries, and chase
            Lighthouse approval metrics. As it's mostly static information, I
            felt like it was low-hanging fruit I could pump out fairly quickly
            while learn and experiment that little bit more.
          </>
        </Card.Text>
      </li>
      <li>
        <Card.Text>
          What else would I do with myself?
          <span role="img" aria-label="zany-face">
            {" "}
            🤪
          </span>
        </Card.Text>
      </li>
    </ul>
  </Card.Body>
);

const WhatWasItMadeWithCardContent = () => (
  <Card.Body>
    <Card.Title>What is it made of?</Card.Title>
    <Card.Subtitle>Web App</Card.Subtitle>
    <ul>
      <li>
        <CardLink
          href="https://facebook.github.io/create-react-app/"
          text="create-react-app"
        />
        {` - React, and all the fanciness that goes with create-react-app!`}
      </li>
      <li>
        <CardLink
          href="https://react-bootstrap.netlify.com/"
          text={`react-bootstrap & bootstrap`}
        />
        {` - the lovely component library`}
      </li>
      <li>
        <CardLink
          href="https://github.com/nkbt/react-copy-to-clipboard"
          text="react-copy-to-cliboard"
        />
        {` - for all my copying needs`}
      </li>
      <li>
        <CardLink href="https://highlightjs.org/" text="highlight.js" />
        {` - code syntax highlighter`}
      </li>
    </ul>

    <Card.Subtitle>Build</Card.Subtitle>

    <ul>
      <li>
        <CardLink href="https://github.com/" text="Git" />
        {` - for the version control`}
      </li>
      <li>
        <CardLink href="https://travis-ci.org/" text="Travis" />
        {` - for the building on commit`}
      </li>
      <li>
        <CardLink href="https://pages.github.com/" text="Github Pages" />
        {` - for the deployment as a static web application`}
      </li>
    </ul>
    <Card.Subtitle>Test</Card.Subtitle>
    <ul>
      <li>
        <CardLink href="https://airbnb.io/enzyme/" text="Enzyme" />
      </li>
    </ul>
  </Card.Body>
);

const AboutMe = () => (
  <CardDeck>
    <Card>
      <ListGroup>
        <ListGroup.Item>
          <WhatIsThisCardContent />
        </ListGroup.Item>
        <ListGroup.Item>
          <WhoCreatedThisCardContent />
        </ListGroup.Item>
        <ListGroup.Item>
          <WhyWasThisCreatedCardContent />
        </ListGroup.Item>
        <ListGroup.Item>
          <WhatWasItMadeWithCardContent />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </CardDeck>
);

export default AboutMe;
