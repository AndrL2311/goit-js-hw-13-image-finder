
const API_KEY = '22969928-aad90fecb00099c81964f1030';
// const URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
let numberPage = 1;
function fetchGallery(data) {

  console.log(data);
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${data}&page=${numberPage}&per_page=12&key=${API_KEY}`;
   console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      numberPage += 1;
      return hits;
    })
    .catch(error => console.log(error));
}


export default fetchGallery;
