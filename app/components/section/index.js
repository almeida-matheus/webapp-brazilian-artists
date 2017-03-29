import React, { Component } from 'react';
import style from './style.styl';

console.log('style');
console.log(JSON.stringify(style));
console.log(style);
class SectionComponent extends Component {

	render () {
		return (
			<section className={`${style.section}`}>
				<span>Salllllllllveee</span>
			</section>
		);
	}
}

export default SectionComponent;