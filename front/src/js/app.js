import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../css/main.css';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className={"commentBox " + styles.importantText}>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);