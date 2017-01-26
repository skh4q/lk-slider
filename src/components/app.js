import React from 'react';
import LKSlider from './LKSlider';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.items = [ 
			"http://placehold.it/500x250/e6d6a8/ffffff/?text=Slide+1", 
			"http://placehold.it/500x250/a7c9e5/ffffff/?text=Slide+2", 
			"http://placehold.it/500x250/d9f3c4/ffffff/?text=Slide+3",
			"http://placehold.it/500x250/c2a7d9/ffffff/?text=Slide+4",
			"http://placehold.it/500x250/b7b3c7/ffffff/?text=Slide+5",
		];
	}
	render() {
		return (
			<div>
				<h1>LK Slider Example</h1>
				<LKSlider items={this.items} />
			</div>
		);
	}
}

export default App;