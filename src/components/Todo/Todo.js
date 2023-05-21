export const Todo = (todo) => {
	return `<li class="${todo.id}"><input class="${todo.id}"  type="checkbox" ${
		todo.checked ? "checked" : ""
	} >${todo.text}</li>`
}
