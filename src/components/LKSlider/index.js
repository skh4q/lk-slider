import React from 'react';
import Slide from './slide';
import './styles/master.scss';

class LKSlider extends React.Component {

	constructor(props) {
		super(props);

		this.items = this.props.items;
		this.containerSize = {
			width: '500',
			height: '250'
		}
		this.wrapperWidth = this.items.length * this.containerSize.width;
		
		this.state = {
			currentIndex: 0,
			wrapperXPosition : 0,
			navigation: {
				prevDisabled: true,
				nextDisabled: false
			}
		}
	}

	navigationHandler(side) {
		
		let newIndex = this.state.currentIndex;
		let navigation = {
			prevDisabled: this.state.navigation.prevDisabled,
			nextDisabled: this.state.navigation.nextDisabled
		}

		if(side == 'prev') {
			newIndex = newIndex - 1;	
			if( newIndex <= 0) {
				navigation.prevDisabled = true;
				newIndex = 0;
			} else {
				navigation.prevDisabled = false;
			}
			navigation.nextDisabled = false;
		}

		if(side == 'next') {
			newIndex = newIndex + 1;
			if( newIndex >= (this.items.length-1) ) {
				navigation.nextDisabled = true;
				newIndex = (this.items.length-1);

			} else {
				navigation.prevDisabled = false;
			}
			navigation.prevDisabled = false;
		}

		this.setState({
			currentIndex: newIndex,
			wrapperXPosition: newIndex * this.containerSize.width,
			navigation: {
				prevDisabled: navigation.prevDisabled,
				nextDisabled: navigation.nextDisabled
			}
		});
		
	}

	isNavDisabled(isDisabled) {
		return (isDisabled)? 'disabled': '';
	}

	render() {
		
		let wrapperStyle = {
			width: this.wrapperWidth + 'px',
			transform: 'translateX(-' + this.state.wrapperXPosition + 'px)'
		}

		let containerSize = {
			width: this.containerSize.width + 'px',
			height: this.containerSize.height + 'px'
		}
		return (
			<div className="lk-slider-container" style={containerSize}>
				<div className="lk-slider-wrapper" style={wrapperStyle}>
					{this.items.map( (item,i) => (
						<Slide key={i} content={item} containerSize={containerSize} />	
					))}
					
				</div>
				
				<div className={"lk-slider-button lk-slider-prev " + this.isNavDisabled(this.state.navigation.prevDisabled)} onClick={this.navigationHandler.bind(this, 'prev')}></div>
				<div className={"lk-slider-button lk-slider-next " + this.isNavDisabled(this.state.navigation.nextDisabled) } onClick={this.navigationHandler.bind(this, 'next')}></div>
			</div>
		);
	}
}

export default LKSlider;