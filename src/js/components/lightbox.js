import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import refs from '../refs';


export default function lightBox() {
  refs.galleryContainer.addEventListener('click', onClick);
}

function onClick(event) {
  if (refs.picture().nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  // console.log(imageRef.dataset);
  const { source } = imageRef.dataset;
  const { alt } = imageRef;
  const instance = basicLightbox.create(
    `<img src = "${source}" alt ="${alt}">`,
  );
  instance.show();
}
