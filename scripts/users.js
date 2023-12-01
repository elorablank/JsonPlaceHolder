"use strict"

window.onload = function (_event) {
    const form = document.getElementById("form")
    form.onsubmit = getUserData
}

function getUserData (event) {
    event.preventDefault()
    const userInput = event.target
    const user = userInput.user.valueAsNumber

    fetch (`https://jsonplaceholder.typicode.com/users/${user}`)
        .then (reposne => reposne.json())
        .then (showUserInfo)
}

function showUserInfo (user) {
    const infoCard = document.querySelector("#info")
    infoCard.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${user.username}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
}