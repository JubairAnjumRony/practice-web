const sections = document.querySelectorAll('section');

for (const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom='5px';
    section.style.borderRadius='7px';
    section.style.backgroundColor ='grey';

}
// add or remove className from javaScript
const placesContainer = document.getElementById('places');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('text-large');