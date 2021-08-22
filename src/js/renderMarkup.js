// // блок добавления html
import refs from './refs';
import galleryTpl from '../templates/gallery.hbs';
import inform from './components/pnotify';


export default function renderGalleryCard(data) {
    
// Проверка получен ли коректный ответ
  if (!data) {
    return inform({
      text: `Что-то пошло не так`,
      delay: 2000,
      icon: true,
    });     
    }

 if (data.length === 0) {
    return  inform({
        text: 'Пожалуйста, попробуйте другой запрос',
        delay: 2000,
        icon: true,
      });
  }
  // console.log(data.length);
 const markup = galleryTpl(data);
  return refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
  
}
