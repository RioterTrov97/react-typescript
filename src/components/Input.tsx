import React, { useRef } from 'react';
import '../styles/Input.css';

interface Props {
	todoCreateHandler: (todoText: string) => void;
}

const Input: React.FC<Props> = ({ todoCreateHandler }) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		todoCreateHandler(enteredText);
	};
	return (
		<form onSubmit={todoSubmitHandler} className="inputForm">
			<label htmlFor="todo-text">Todo Text</label>
			<div className="inputFieldButton">
				<input
					id="todo-text"
					type="text"
					ref={textInputRef}
					placeholder="Add todo text"
				/>
				<button type="submit">Add Todo</button>
			</div>
		</form>
	);
};

export default Input;
