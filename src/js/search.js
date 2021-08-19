import refs from './refs';
import renderGalleryCard from './renderMarkup';
import fetchGallery from './apiService';



refs.searchForm.addEventListener('submit', search);

function search(event) {
  console.dir(event.target);
    event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value;
//   clearSearchFormContainer();

  console.log('searchQuery', searchQuery);
 
  if (searchQuery.length > 1) {
    return fetchGallery(searchQuery).then(renderGalleryCard);
  // return fetchGallery(searchQuery);
  }
 };

//  function clearSearchFormContainer() {
//   refs.countryContainer.innerHTML = '';
// }
export default search;