const inputElement = document.querySelector(".js-input");
const infosElement = document.querySelector(".js-infos");
let html = "";
function displayData() {
  const userCountry = inputElement.value;
  const url = "https://restcountries.com/v3.1/name/" + userCountry;

  if (!inputElement.value) {
    infosElement.innerHTML = `<p class='error-message'>Entrez le nom d'un pays</p>`;
    return;
  }

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data[0] == undefined) {
        html = "<p class='error-message'>Entrez un nom valide</p>";
      } else {
        console.log(data[0]);
        html = `
      <div class="section-div">
        <p class="title">Country</p>
        <p>${data[0].name.common}</p>
      </div>
      <div class="section-div">
        <p class="title">Capital</p>
        <p>${data[0].capital[0]}</p>
      </div>
      <div class="section-div">
        <p class="title">Continent</p>
        <p>${data[0].continents[0]}</p>
      </div>
      <div class="section-div">
        <p class="title">Flag</p>
        <div class="image-div">
          <img class='country-image' src="${data[0].flags.png}" alt="" />
        </div>
      </div>
      `;
      }

      infosElement.innerHTML = html;
    });
}
