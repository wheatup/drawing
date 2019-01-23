import React, { Component } from 'react';
import DrawingBoard from './components/DrawingBoard';

class App extends Component {
	render() {
		return (
			<div className="app">
				<DrawingBoard />
			</div>
		);
	}
}

export default App;
