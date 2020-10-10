console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentloaded', function(){

 
fetchPictures();
fetchBreeds();

});



function fetchPictures() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
       fetch(imgUrl)
        .then(res => res.json())
        .then(res => {
            res.message.forEach(image => addDogImage(image))
        });
}

function addDogImage(picUrl) {
    const dogContainer = document.querySelector('#dog-image-container');
    let newImage = document.createElement("img");
    newImage.src = picUrl;
    dogContainer.appendChild(newImage);
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(list => {
        list.message.forEach(breed => addBreed(breed));
    });
}

function addBreed(breedName){
    const dogBreeds = document.querySelector('#dog-breeds');
    let newBreedLi = document.createElement("li");
    newBreedLi.innerText = breedName;
    dogBreeds.appendChild(newBreedLi);
}

addDogImage();
addBreed();