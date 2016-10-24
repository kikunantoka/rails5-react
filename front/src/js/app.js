import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Icon} from 'react-fa';
import styles from '../css/main.css';
import image from '../img/animation-01.gif';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello, world! I am a <span className={styles.importantText}>CommentBox</span>.<Icon spin name="spinner" /></p>
        <Button bsStyle="primary">Primary</Button>
        <h2>This is background-image.</h2>
        <div className={styles.image}></div>
        <h2>This is img tag.</h2>
        <img src={image}/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);