import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/init.scss');
require('../scss/index.scss');
var HomeNav = React.createClass({

	getInitialState: function(){
		var num = 192;
		return {
			inputContent:[{'X0':0,'Y0':0},{'X0':num,'Y0':0},{'X0':num*2,'Y0':0},{'X0':num*3,'Y0':0},{'X0':num*4,'Y0':0},{'X0':num*5,'Y0':0},{'X0':num*6,'Y0':0},{'X0':num*7,'Y0':0},]
		}
	},

	render:function(){
		var pixel = this.state.inputContent,
			length = pixel.length,
			domArr = [];
		for(var i = 1;i<length;i++){
			var style = {left:pixel[i].X0,top:pixel[i].Y0};
			domArr.push(<div key={'dom'+i} className='box' style={style}></div>)
		}
		return(
				<div className="home_nav">
					<div className="box"></div>
					{domArr}
				</div>	
			);
	}

});

module.exports = HomeNav;