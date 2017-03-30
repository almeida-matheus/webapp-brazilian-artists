import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import Card from '../../components/card';

class AppContainer extends Component {
	render () {
		const {
			data
		} = this.props;

		return (
			<div>
				<Navbar />
				<Section>
					{
						data.result.map((item, index) => {
							return (
								<Card
									key={index}
									name={item.name}
									image={item.image}
									wiki={item.wiki}
								/>
							);
						})
					}
				</Section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.artists,
	};
};

export default connect(mapStateToProps)(AppContainer);