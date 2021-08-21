import refs from './refs';
import renderGalleryCard from './renderMarkup';
import ApiService from './apiService';

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', search);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function search(event) {
  // console.dir(event.target);
    event.preventDefault();
  apiService.query = event.currentTarget.elements.query.value;
//   clearSearchFormContainer();

 
  if (apiService.query.length > 1) {
    return apiService.fetchGallery().then(renderGalleryCard);
  // return apiService.fetchGallery(searchQuery);
  }
 };

//  function clearSearchFormContainer() {
//   refs.countryContainer.innerHTML = '';
// }


function onLoadMore() {
  console.log('хочу еще');
 return apiService.fetchGallery().then(renderGalleryCard);
};

export default search;