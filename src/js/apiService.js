
const API_KEY = '22969928-aad90fecb00099c81964f1030';
const BASE_URL = 'https://pixabay.com/api/';

let numberPage = 1;

// function fetchGallery(data) {

//   console.log(data);
//   const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${data}&page=${numberPage}&per_page=12&key=${API_KEY}`;
//    console.log(url);
//   return fetch(url)
//     .then(response => response.json())
//     .then(({ hits }) => {
//       numberPage += 1;
//       return hits;
//     })
//     .catch(error => console.log(error));
// }


export default class ApiService{
  constructor() {
    this.searchQuery = '';
   }
  
fetchGallery(searchQuery) {
  // console.log(data);
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${numberPage}&per_page=12&key=${API_KEY}`;
  //  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      numberPage += 1;
      return hits;
    })
    .catch(error => console.log(error));
  }
  
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  
}
