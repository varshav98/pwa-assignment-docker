const container = document.querySelector(".container")
const teddy = [
  { name: "flower1", image: "images/flowe1.jpeg" },
  { name: "flower2", image: "images/flower2.jpeg" },
  { name: "flower3", image: "images/flower3.jpeg" },
  { name: "flower4", image: "images/flower4.jpeg" },
  { name: "flower5", image: "images/flower5.jpeg" },
  { name: "flower6", image: "images/flower6.jpeg" },

]
const showTeddy = () => {
    let output = ""
    teddy.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showTeddy)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
