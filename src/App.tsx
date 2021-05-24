import React, { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { Todo } from './models/todo.model';
import './styles/App.css';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoCreateHandler = (todoText: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: prevTodos.length.toString(), text: todoText },
		]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<div className="appContainer">
			<div className="appBody">
				<Input todoCreateHandler={todoCreateHandler} />
				{todos.length > 0 && (
					<TodoList
						items={todos}
						todoDeleteHandler={todoDeleteHandler}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
