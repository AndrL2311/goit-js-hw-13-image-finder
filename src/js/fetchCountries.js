
  function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  return fetch(url)
    .then(response => {
        return response.json();
        // console.log(response.json());
    })
    .catch(error => console.log(error));
}


export default fetchCountries;
