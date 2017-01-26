import React from 'react';


class Slide extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let style = this.props.containerSize;
		return(
			<div className="lk-slider-slide" style={style}>
				<img src={this.props.content} />
			</div>
		);
	}
}

export default Slide;