import refs from './refs';
// import renderCountryCard from './renderMarkup';
import fetchGallery from './fetchGallery';



refs.searchForm.addEventListener('submit', search);

function search(event) {
  console.dir(event.target);
    event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value;
//   clearSearchFormContainer();

  console.log('searchQuery', searchQuery);
 
  if (searchQuery.length > 1) {
//     // return fetchCountries(searchQuery).then(renderCountryCard);
  return fetchGallery(searchQuery);
  }
 };

//  function clearSearchFormContainer() {
//   refs.countryContainer.innerHTML = '';
// }
export default search;