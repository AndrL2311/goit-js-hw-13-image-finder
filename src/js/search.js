import refs from './refs';
import renderCountryCard from './renderMarkup';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';

refs.searchInput.addEventListener('input', debounce(search, 500));

function search(event) {
    const searchQuery = event.target.value;
    // console.log('searchQuery', searchQuery);
    clearSearchInput();
    // if (searchQuery !== '') {
       if (searchQuery.length > 1) {
    return fetchCountries(searchQuery).then(renderCountryCard);
  }
 };

 function clearSearchInput() {
  refs.countryContainer.innerHTML = '';
}
export default search;