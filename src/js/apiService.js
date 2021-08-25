
const API_KEY = '22969928-aad90fecb00099c81964f1030';
const BASE_URL = 'https://pixabay.com/api/';


export default class ApiService{
  constructor() {
    this.searchQuery = '';
    this.page = 1;
   }
  // Функция реализована через промисы
  // fetchGallery() {
  // // console.log(this);
  // const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
  // //  console.log(url);
  // return fetch(url)
  //   .then(response => response.json())
  //   .then(({ hits }) => {
  //     this.incrementPage();
  //     return hits;
  //   })
  //   .catch(error => console.log(error));
  // }

  // Функция реализована через асинхронные функции
  async fetchGallery() {
    try{
      // console.log(this);
      const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
      //  console.log(url);
      const response = await fetch(url);
      const hits = await response.json();
      const item = ({ hits }) => {
        this.incrementPage();
        return hits;
      };
      // console.log(hits);
      return await item(hits);
    }
    catch (error) { console.log(error);}
  }
  
    incrementPage() {
    this.page += 1;
  }

    resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

}
