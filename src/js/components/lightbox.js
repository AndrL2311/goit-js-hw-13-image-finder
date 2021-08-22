import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import refs from '../refs';


export default function lightBox() {
  refs.galleryContainer.addEventListener('click', onClick);
}

function onClick(event) {
  const imageRef = event.target;
  // Проверяем тип узла, если не картинка выходим из функции
  if (imageRef.nodeName !== 'IMG') {
    return;
  }
  // console.log(imageRef.nodeName);
  const { source } = imageRef.dataset;
  const { alt } = imageRef;
  const instance = basicLightbox.create(
    `<img src = "${source}" alt ="${alt}">`,
  );
  instance.show();
}
