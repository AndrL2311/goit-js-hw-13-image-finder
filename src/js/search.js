import refs from './refs';
import renderGalleryCard from './renderMarkup';
import ApiService from './apiService';
import LoadMoreBtn from './components/load-more-btn';
import lightBox from './components/lightbox';

// Создаем экземпляры
const apiService = new ApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
console.log(loadMoreBtn);



//  Слушатели
refs.searchForm.addEventListener('submit', search);
loadMoreBtn.refs.button.addEventListener('click', fetchHitsGallery);

function search(event) {
  // Чтобы страницка не перегружалась
  event.preventDefault();
  // Передаем значение инпута в apiService.query
  apiService.query = event.currentTarget.elements.query.value;
  // Проверка на пустую строку
  if (apiService.query === '') {
    return alert('Введите ключевое слово по которому искать фотографии');
  }
  //  Переключаем вид кнопки
  loadMoreBtn.show();
  // Сбрасываем счетчик страниц
  apiService.resetPage();
  // Чистим контейнер галереи
  clearSearchFormContainer();
   // Добавляем контейнер галереи
  fetchHitsGallery();
  lightBox();
  };

 function clearSearchFormContainer() {
  refs.galleryContainer.innerHTML = '';
}

function fetchHitsGallery() {
    loadMoreBtn.disable();
  return apiService.fetchGallery().then(hits => {
    renderGalleryCard(hits);
    loadMoreBtn.enable();
    // Страница должна автоматически плавно проскроливаться
      const element = loadMoreBtn.refs.button;
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
    
  });
};


export default search;