
let text = document.querySelector('#inputbar');
console.log(text)
function searchMovieData() {
  return fetch(`http://www.omdbapi.com/?s=${text.value}&apikey=37ab1775`)
  .then(function(response){
    return response.json();
  })
  .then(json=> {
    let outerContainer = document.querySelector('#searchingresult');
    removeChildren(outerContainer)
    json.Search.forEach(movie=>addMovieData(movie))
    return console.log(json)
  })
};

function addMovieData(movie) {
  let outerContainer = document.querySelector('#searchingresult');
  let movieCard = document.createElement('div');
  movieCard.classList.add("movieCardAppear");
  let moviePoster = document.createElement('img');
  moviePoster.src = movie.Poster;
  moviePoster.classList.add("moviePosterAppear");
  let movieTitle = document.createElement('p');
  movieTitle.innerHTML = movie.Title;
  outerContainer.appendChild(movieCard);
  movieCard.appendChild(moviePoster);
  movieCard.appendChild(movieTitle);
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while(child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  searchMovieData();
});





