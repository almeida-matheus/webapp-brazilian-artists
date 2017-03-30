import React, { Component } from 'react';
import style from './style.styl';
import Button from '../../components/button';

class CardComponent extends Component {
	render () {
		const baseStyle = {
			backgroundImage: `url(${this.props.image})`
		};

		return (
			<article className={`${style.default}`}>
				<div className={`${style.image}`} style={baseStyle} >
					<span> {this.props.name} </span>
				</div>
				<div className={`${style['actions-container']}`}>
					<Button
						value={'Wikipedia'}
						href={this.props.wiki}
					/>
				</div>
			</article>
		);
	}
}

export default CardComponent;