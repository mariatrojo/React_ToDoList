import React from 'react';

const TodoCreate = (props) => {
	return (
		<div>
			<form>
				<input type="text" />
				<input type="submit" />
			</form>
		</div>
	)
	
}

const TodoList = (props) => {
	const list = props.items.map((item, index) => {
		return (
			<li key={index}>
				{item.id} - {item.text} - {item.completed.toString()}
			</li>
		)
	});
	return (
		<ul>
			{list}
		</ul>
	)
 }
 
 class App extends React.Component {
 
	 constructor(props) {
		 super(props);
		 this.state = {
			 items: [
				 { id: 1, text: "Learn React", completed: true},
				 { id: 2, text: "Build a todo app", completed: false},
				 { id: 3, text: "Profit", completed: false}
			 ],
			 filter: 'all'
		 }
		 this.addTodo = this.addTodo.bind(this);
		 this.updateTodo = this.updateTodo.bind(this);
		 this.removeTodo = this.removeTodo.bind(this);
	 }
 
	 addTodo(index){
		 this.state.languages[index] = 'changed';
		 this.setState({
			 languages: this.state.languages
		 })
	 }

	 updateTodo(index){
	}

	removeTodo(index){

	}
 
	 render() {
		 return (
			 <div>
				 <TodoCreate
				//  addTodo={this.addTodo}
				 />
				 <TodoList
				 items = {this.state.items}
				 updateTodo = {this.updateTodo}
				 removeTodo = {this.removeTodo}
				 />
			 </div>
		 )
	 }
 
 }

export default App;
