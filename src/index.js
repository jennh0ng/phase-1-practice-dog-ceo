console.log('%c HI', 'color: firebrick')

// challenge 1 - add JS that on page load, fetches images using url; parses response as 'JSON', adds image elements to the DOM **for each** image in the array

const breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    // console.log(e);
    listImages();
    listBreeds();

})

// challenge 2 - add JS that on page load, fetches all the dog breeds using url; adds breeds to the page in the <ul> provided in index.html
function listImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        // console.log(results);
        // results.message has all of the urls
        results.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            const container = document.querySelector('#dog-image-container')
            container.appendChild(img);
        });
    });
}

// challenge 3 - once all of the breeds are rendered in the <ul>, add JS so that when the user clicks on any of the <li>, the font color of the <li> changes
function listBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results=>{
        const ul = document.querySelector('#dog-breeds')
        const li = document.createElement('li')
        console.log(results)
        // Object.keys returns an array; results.message has all of the breeds
        Object.keys(results.message).forEach(breed => {
            li.innerText = breed;
            // we do this last because we wanted the list to come up first; including in here so that this applies to each list item before it all gets appended to ul in the DOM
            li.addEventListener('click', (e) => {
              e.target.style.color = 'pink'  
            })
            // slap the li's onto the <ul> that is in the DOM
            ul.appendChild(li);
            // we want to add all of our breeds in the breeds array
            breeds.push(breed);
        }) 
        filter(breeds);

    })
}

// challenge 4 - once all dog breeds are loaded, add JS so that user can filter breeds with a particular letter using a dropdown
function filterBreeds(breeds) {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', (e) => {
        const ul = document.querySelector('#dog-breeds');
        if (e.target.value !== '') {
            // emptying  the ul so we only display the breeds we want
            ul.innerHTML = ''
            // .filter() returns an array so newBreeds is an array now
            let newBreeds = breeds.filter(breed => {
                e.target.breed.startsWith();
            });
            // newBreeds is the list for only the breeds we want returned when we filter in the filter box
            newBreeds.forEach(breed => {
                const list = document.createElement('li');
                list.innerText = breed;
                ul.append(list);
            })
        }
        else {

        }
    })

}

