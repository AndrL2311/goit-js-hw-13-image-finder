// // блок добавления html
import refs from './refs';
import galleryTpl from '../templates/gallery.hbs';
// import error from './pnotify';


function renderGalleryCard(data) {
    
//     // Проверка получен ли коректный ответ 
//     console.log(!data);
//     if (!data) {
//         // return console.log('Что-то пошло не так');
//         return error({
//       text: `Something went wrong`,
//       delay: 1000,
//     });     
//     }

//     // Проверка по количеству полученных стран
//     if (data.length > 10) {
//         // console.log('Слишком много стран, уточните запрос');
//     error({
//       text: `Too many matches found. We found ${data.length} countries. Please enter a more specific query!`,
//       delay: 1000,
//     }); 
//     } else if (data.length >= 2) {
//         return renderMarkup(listOfCountriesTpl, data);
//     } else if (data.length === 1) {
//         return renderMarkup(countryTpl, data);
//     }
  console.log(data);
 const markup = galleryTpl(data);
  return refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
  
}

// // Функция добавления разметки
// function renderMarkup(templateFn, data) {
//   const markup = templateFn(data);
//   return refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
// }

export default renderGalleryCard;