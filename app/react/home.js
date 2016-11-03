import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/init.scss');
require('../scss/index.scss');
var HomeNav = React.createClass({

	getInitialState: function(){
		return {
			imgArr:[require('../img/(1).jpg'),require('../img/(2)2x2.jpg'),require('../img/(5).jpg'),require('../img/(3).jpg'),require('../img/(4).jpg'),require('../img/(6)2x2.jpg'),require('../img/(14).jpg'),require('../img/(7).jpg'),require('../img/(8).jpg'),require('../img/(9)2x2.jpg'),require('../img/(11).jpg'),require('../img/(12).jpg'),require('../img/(13).jpg'),require('../img/(14).jpg'),require('../img/(15).jpg'),require('../img/(16).jpg'),require('../img/(17).jpg'),require('../img/(18).jpg'),require('../img/(19).jpg'),]
		}
	},
	render:function(){
		var imgArr = this.state.imgArr,
			length = imgArr.length,
			style  = '',
			cName  = '',
			nextX = 0,
			nextY = 0,
			num = 160,
			x = 0,
			y = 0,
			domArr = [];
		for(var i = 1;i<length;i++){
			if(0 == x%(6) && x != 0){				
				x = 0;
				y ++;
			}
			if(imgArr[i].indexOf('2x2') > -1){							
				cName = 'box2'
				nextX = x+2
			}else{
				cName = 'box1'	
			}
			style = {left:x*num,top:y*num}
			
			domArr.push(<div className={cName} style={style} key={'imgBox'+i}><img key={'img'+i} src={imgArr[i]}/></div>)
			x ++	
		}

		return(
				<div className="home_nav">
					{domArr}
				</div>	
			);
	}

});

module.exports = HomeNav;