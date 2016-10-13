import React, { Component } from 'react';
import MyForm from '.././localCompoments/MyForm';

export default class FirstPage extends Component {
	render () {
		const { params } = this.props
		const { query } = this.props.location
		return (
			<div>
				<h2>FirstPage</h2>
				<h5>params.test: {params.test}, query.q: {query.q}</h5>
				<MyForm />
			</div>
		)
	}
}