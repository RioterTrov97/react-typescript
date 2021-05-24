import React from 'react';
import '../styles/TodoList.css';

interface Props {
	items: { id: string; text: string }[];
	todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ items, todoDeleteHandler }) => {
	return (
		<ul className="list">
			{items.map((item) => (
				<div className="listItem">
					<li key={item.id}>
						{Number(item.id) + 1}. {item.text}
					</li>
					<button onClick={todoDeleteHandler.bind(null, item.id)}>
						❌
					</button>
				</div>
			))}
		</ul>
	);
};

export default TodoList;
