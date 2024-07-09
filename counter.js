let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment () {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    }

let greeting = "Hi, my name is "
let userName = "Kate"

let myGreeting = greeting + userName

console.log(myGreeting)
