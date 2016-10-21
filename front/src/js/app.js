import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

import styles from '../css/main.css';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className={"commentBox " + styles.importantText}>
        <p>Hello, world! I am a CommentBox.</p>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);