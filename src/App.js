import React from 'react';



const Language = (props) => {

   return (
		<div>
		   <h3>{props.language}</h3>
		   <button onClick = { () => {props.onChange(props.index) } }>Change</button>
		</div>
   )
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			languages: ['React', 'Redux', 'Node', 'Express']
		}
		this.change = this.change.bind(this);
	}

	change(index){
		this.state.languages[index] = 'changed';
		this.setState({
			languages: this.state.languages
		})
	}

	render() {
		return (
			<div>
				{this.state.languages.map( (language, index) => {
					return (
						
						// <div key={index}>
						// 	{language}
						// 	<button onClick={()=>{ this.change(index) }}>Change</button>
						// </div>

						<Language 
							key={index} 
							language={language} 
							onChange={this.change}
							index={index}
						/>
					)
				} ) }

			</div>
		)
	}

}

export default App;
