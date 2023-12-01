"use strict"

window.onload = function () {
    const form = document.getElementById("form")
    form.onsubmit = getTodo
}

function getTodo (event) {
    event.preventDefault()
    const selectTodo = event.target
    const selectedTarget = selectTodo.elements.todo.valueAsNumber

    fetch (`https://jsonplaceholder.typicode.com/todos/${selectedTarget}`)
        .then (response => response.json())
        .then (makeTodo)
}

function makeTodo (todo) {
    const card = document.querySelector("#result")
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${todo.title}</h5>
      <p class="card-text">${todo.completed}</p>
    </div>
  </div>`
}