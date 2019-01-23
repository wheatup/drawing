import React, { Component } from 'react';
import DrawingBoard from './components/DrawingBoard';

class Drawing extends Component {
	render() {
		return (
			<div className="drawing">
				<DrawingBoard />
			</div>
		);
	}
}

export default Drawing;
