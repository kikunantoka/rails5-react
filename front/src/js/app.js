import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Icon} from 'react-fa';
import styles from '../css/main.css';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello, world! I am a CommentBox.<Icon spin name="spinner" /></p>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);