import React, { Component } from 'react';
import LC from 'literallycanvas';

class DrawingBoard extends Component {
	state = {}
	render() {
		return (
			<div className="drawing-board">
				<LC.LiterallyCanvasReactComponent imageURLPrefix="/img/lc" />
			</div>
		);
	}
}

export default DrawingBoard;