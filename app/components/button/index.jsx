import React, { Component } from 'react';
import style from './style.styl';

class ButtonComponent extends Component {
	render () {
		return (
			<a
				href={this.props.href}
				className={`${style.default}`}
				target='_blank'
			>
				<span>
					{
						this.props.value
					}
				</span>
			</a>
		);
	}
}

export default ButtonComponent;