import React from 'react';
import ReactDOM from 'react-dom';
require('../css/main.css');
require('../scss/index.scss');
class HelloReact extends React.Component {
	handle() {
		alert('你点击了我一下！');
	}
  	render() {
	    return (
	      <h1 onClick = {this.handle}>hello word{this.props.name}! {this.props.title}</h1>
	    );
    }
}
module.exports = HelloReact;
