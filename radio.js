const radioMainContent = document.querySelector(".stations_list_index")

fetch('https://teclead.de/recruiting/radios') // go fetch de aPI
  .then(response => response.json()) // open the json data
  .then(data => {
    console.log(data) // the data is being display in the console
    data.radios.map(radio => {
      // iterate over the json data and display it inside the html code
      const content =
      `<div class="main-radios">
        <div class="radio">
          <button>${radio.name}</button>
          <p class="frequency">${radio.frequency}</p>
        </div>
      </div>`
      // insert each div into the radio-body class
      radioMainContent.insertAdjacentHTML("beforeend", content);
    })
  })
