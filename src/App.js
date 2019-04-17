import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Header from "./components/Header";
import Loading from "./base_components/Loading";

class App extends React.Component {
  render() {
    const CardContainer = React.lazy(() =>
      import("./components/CardContainer")
    );
    const AboutMe = React.lazy(() => import("./components/AboutMe.js"));

    return (
      <div className="App">
        <Header />
        <Tabs
          defaultActiveKey="cheatsheet"
          id="uncontrolled-tab-example"
          style={{ marginBottom: "10px" }}
        >
          <Tab eventKey="cheatsheet" title="Cheat Sheet">
            <Loading component={<CardContainer />} />
          </Tab>
          <Tab eventKey="about" title="About">
            <Loading component={<AboutMe />} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
