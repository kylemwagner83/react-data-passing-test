import React from 'react';
import Child from './Child'

class Parent extends React.Component{	
	state = {
		msg: "",
	}

	handleCallback = (childData) =>{
		this.setState({msg: childData})
	}

	render() {
		const {msg} = this.state;
		return(
		<div>
			<Child parentCallback = {this.handleCallback}/>	
			<h1> {msg}</h1>
		</div>
		);
	}
}

export default Parent;
