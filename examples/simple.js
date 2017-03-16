webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(185);


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var Line = __webpack_require__(3).Line;
	var Circle = __webpack_require__(3).Circle;
	var React = __webpack_require__(6);
	var ReactDOM = __webpack_require__(39);
	
	var Example = React.createClass({
	  displayName: 'Example',
	  getInitialState: function getInitialState() {
	    return {
	      percent: 30,
	      color: '#3FC7FA'
	    };
	  },
	  changeState: function changeState() {
	    var colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
	    var value = parseInt(Math.random() * 100, 10);
	    this.setState({
	      percent: value,
	      color: colorMap[parseInt(Math.random() * 3, 10)]
	    });
	  },
	  render: function render() {
	    var containerStyle = {
	      width: '250px'
	    };
	    var circleContainerStyle = {
	      width: '250px',
	      height: '250px',
	      display: 'inline-block'
	    };
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Line Progress ',
	        this.state.percent,
	        '%'
	      ),
	      React.createElement(
	        'div',
	        { style: containerStyle },
	        React.createElement(Line, { percent: this.state.percent, strokeWidth: '4', strokeColor: this.state.color })
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Circle Progress ',
	        this.state.percent,
	        '%'
	      ),
	      React.createElement(
	        'div',
	        { style: circleContainerStyle },
	        React.createElement(Circle, {
	          percent: this.state.percent,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color
	        })
	      ),
	      React.createElement(
	        'div',
	        { style: circleContainerStyle },
	        React.createElement(Circle, {
	          percent: this.state.percent,
	          gapWidth: 70,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color
	        })
	      ),
	      React.createElement(
	        'div',
	        { style: circleContainerStyle },
	        React.createElement(Circle, {
	          percent: this.state.percent,
	          gapWidth: 70,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color,
	          gapPosition: 'bottom'
	        })
	      ),
	      React.createElement(
	        'div',
	        { style: circleContainerStyle },
	        React.createElement(Circle, {
	          percent: this.state.percent,
	          gapWidth: 70,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color,
	          gapPosition: 'left'
	        })
	      ),
	      React.createElement(
	        'div',
	        { style: circleContainerStyle },
	        React.createElement(Circle, {
	          percent: this.state.percent,
	          gapWidth: 70,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color,
	          gapPosition: 'right'
	        })
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          'button',
	          { onClick: this.changeState },
	          'Change State'
	        )
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(Example, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map