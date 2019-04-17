/**
 * This code is attributed to @vittoriozamboni
 * on his response to https://github.com/highlightjs/highlight.js/issues/925
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/highlight"; // import hljs library
import "highlight.js/styles/hopscotch.css"; // import your preferred style

const registeredLanguages = {}; // keep a record of registered languages

export class CodeHighlight extends Component {
  constructor(props) {
    super(props);
    // do not show anything until language is loaded
    this.state = { loaded: false };
    // create a ref to highlight only the rendered node and not fetch all the DOM
    this.codeNode = React.createRef();
  }

  componentDidMount() {
    const { language } = this.props;
    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`);
        hljs.registerLanguage(language, newLanguage);
        registeredLanguages[language] = true;
        this.setState(
          () => {
            return { loaded: true };
          },
          () => {
            this.highlight();
          }
        );
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register and higlight language ${language}`);
        // We can alternatively set loaded to true and show an error message in the
        // code block instead of children, or just show the children without highlight.
        // This would be an improvement or an optional behavior given a special prop.
      }
    } else {
      this.setState({ loaded: true });
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    this.codeNode &&
      this.codeNode.current &&
      hljs.highlightBlock(this.codeNode.current);
  };

  render() {
    const { language, children } = this.props;
    const { loaded } = this.state;
    const { style } = this.props;
    if (!loaded) return ""; // or show a loader

    return (
      <pre>
        <code ref={this.codeNode} className={language} style={style}>
          {children}
        </code>
      </pre>
    );
  }
}

CodeHighlight.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired
};
