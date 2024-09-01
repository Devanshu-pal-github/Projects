const countriesContainer = document.querySelector(".countries-container");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      // console.log(country);
      const countryCard = document.createElement("a");
      countryCard.classList.add("countries-card");
      countryCard.href = `http://127.0.0.1:5500/rest-countries-api-with-color-theme-switcher-master/country.html?name=${country.name.common}`;
      countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.common}">
      <div class="card-text">
      <h3 class="card-title">${country.name.common}</h3>
      <p><b>population: </b>${country.population.toLocaleString("en-IN")}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital}</p>
      </div>`;
      //   console.log(countryCard);
      countriesContainer.append(countryCard);
    });
  });






  // new URLSearchParams(window.location.search).get('name')