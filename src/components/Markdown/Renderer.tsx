import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

type Props = {
  file: string;
};

type State = {
  content: string | null;
};

// if you have static content to be displayed on a page, you can instead store it as markdown.
// create a markdown file in public/markdowns/<filename>.md
// html in markdown is supported here
export class Renderer extends Component<Props, State> {
  state: State = {
    content: null,
  };

  componentDidMount = async () => {
    const result = await fetch(`/markdowns/${this.props.file}`);
    const content = await result.text();
    this.setState({ content });
  };

  render() {
    return (
      <>
        {this.state.content === null ? (
          'Loading...'
        ) : (
          <ReactMarkdown source={this.state.content} escapeHtml={false} />
        )}
      </>
    );
  }
}
