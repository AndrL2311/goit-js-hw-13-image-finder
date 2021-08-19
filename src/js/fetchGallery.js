
const API_KEY = '22969928-aad90fecb00099c81964f1030';
// const URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const numberPage = 1;
function fetchGallery(value) {
  console.log(value);
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${numberPage}&per_page=12&key=${API_KEY}`;
  return fetch(url)
    .then(response => {
        return response.json();
        console.log(response.json());
    })
    .catch(error => console.log(error));
}


export default fetchGallery;
