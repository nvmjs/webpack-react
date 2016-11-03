import React from 'react';
import ReactDOM from 'react-dom';
var btn = React.createClass({
	getInitialState:function(){
		
		return {
			inputContent:"我就是input的值"
		}	
		
	},
	changeHandle:function(event){
		this.setState({
			inputContent:event.target.value
		});
	},
	render:function(){
		return(
				<div>
					<input onInput={this.changeHandle}  type="text" />
					<span>{this.state.inputContent}</span>
				</div>	
			);
	}

});
module.exports = btn;