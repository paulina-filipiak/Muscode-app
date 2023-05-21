import { Todo } from "../Todo/Todo"

export const TodoList = (todos) => {
	const list = document.querySelector("#todo-list")
	return (list.innerHTML = `${todos.map((todo) => Todo(todo)).join("")}`)
}
