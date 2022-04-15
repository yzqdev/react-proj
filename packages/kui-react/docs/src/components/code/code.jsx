import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import React from "react";
import { Kui, PropTypes } from "@/components/kui";
import Icon from "@/components/icon";

export default class Code extends Kui {
  constructor(props) {
    super(props);
    this.codeRef = React.createRef();
  }
  componentDidMount() {
    hljs.highlightBlock(this.codeRef.current);
  }

  render() {
    return (
      <div className="k-code">
        <pre>
          <code className={this.props.lang} ref={this.codeRef}>
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}

Code.propTypes = {
  lang: PropTypes.string,
};

Code.defaultProps = {
  lang: "js javascript",
};
