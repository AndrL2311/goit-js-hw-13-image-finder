// блок добавления html
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import listOfCountriesTpl from '../templates/listOfCountries.hbs';
import error from './pnotify';


function renderCountryCard(data) {
    
    // Проверка получен ли коректный ответ 
    console.log(!data);
    if (!data) {
        // return console.log('Что-то пошло не так');
        return error({
      text: `Something went wrong`,
      delay: 1000,
    });     
    }

    // Проверка по количеству полученных стран
    if (data.length > 10) {
        // console.log('Слишком много стран, уточните запрос');
    error({
      text: `Too many matches found. We found ${data.length} countries. Please enter a more specific query!`,
      delay: 1000,
    }); 
    } else if (data.length >= 2) {
        return renderMarkup(listOfCountriesTpl, data);
    } else if (data.length === 1) {
        return renderMarkup(countryTpl, data);
    }
}

// Функция добавления разметки
function renderMarkup(templateFn, data) {
  const markup = templateFn(data);
  return refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default renderCountryCard;