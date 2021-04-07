let text = document.querySelector('#inputbar');
console.log(text)
function searchMovieData() {
  return fetch(`http://www.omdbapi.com/?s=${text.value}&apikey=37ab1775`)
  .then(function(response){
    return response.json();
  })
  .then(json=> {
    json.Search.forEach(movie=>addImage(movie.Poster))
    console.log(json)
  })
};

function addImage(moviesUrl) {
  let container = document.querySelector('#searchingresult');
  let newImageEl = document.createElement("img");
  newImageEl.src = moviesUrl;
  container.appendChild(newImageEl);
};

document.addEventListener('DOMContentLoaded', function() {
  searchMovieData();
});






