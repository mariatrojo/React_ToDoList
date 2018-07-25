import React from 'react';



const List = (props) => {

   return (
	   <h3> To Do List: </h3>
   )
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return <List />
	}

}

export default App;
