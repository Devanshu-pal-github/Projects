const countryName = new URLSearchParams(window.location.search).get("name");
const flagImg = document.querySelector(".country-detail img");
const countryNameH1 = document.querySelector(".countryNameH1");
const nativeNameEl = document.querySelector(".nativeNameEl");
const populationEl = document.querySelector(".populationEl");
const regionEl = document.querySelector(".regionEl");
const subRegionEl = document.querySelector(".subRegionEl");
const capitalEl = document.querySelector(".capitalEl");
const topLevelDomainEl = document.querySelector(".topLevelDomainEl");
const currencyEl = document.querySelector(".currencyEl");
const languageEl = document.querySelector(".languageEl");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((country) => {
    console.log(country);
    flagImg.src = country[0].flags.svg;
    countryNameH1.innerText = country[0].name.common;
    if (country[0].name.nativeName) {
      nativeNameEl.innerHTML = `<b>Native Name:</b> ${
        Object.values(country[0].name.nativeName)[0].common
      }`;
    } else {
      nativeNameEl.innerHTML = `<b>Native Name: </b> ${country[0].name.common}`;
    }
    populationEl.innerHTML = `<b>Population: </b>${country[0].population}`;
    regionEl.innerHTML = `<b>Region: </b>${country[0].region}`;
    capitalEl.innerHTML = `<b>Capital: </b>${country[0].capital[0]}`;
    currencyEl.innerHTML = `<b>Currency: </b>${
      Object.values(country[0].currencies)[0].name
    } , <b>Symbol: </b> ${Object.values(country[0].currencies)[0].symbol} `;
    languageEl.innerHTML = `<b>Languages: </b>${Object.values(country[0].languages)[0]}`;
  });
