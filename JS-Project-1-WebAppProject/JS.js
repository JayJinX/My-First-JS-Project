
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
    let MovieResult = removeDuplicates(json.Search)
    MovieResult.forEach(movie=>addMovieData(movie))
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

function removeDuplicates(arr) {

  const result = [];
  const duplicatesIndices = [];

  // Loop through each item in the original array
  arr.forEach((current, index) => {
  
      if (duplicatesIndices.includes(index)) return;
  
      result.push(current);
  
      // Loop through each other item on array after the current one
      for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {
      
          const comparison = arr[comparisonIndex];
          const currentKeys = Object.keys(current);
          const comparisonKeys = Object.keys(comparison);
          
          // Check number of keys in objects
          if (currentKeys.length !== comparisonKeys.length) continue;
          
          // Check key names
          const currentKeysString = currentKeys.sort().join("").toLowerCase();
          const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
          if (currentKeysString !== comparisonKeysString) continue;
          
          // Check values
          let valuesEqual = true;
          for (let i = 0; i < currentKeys.length; i++) {
              const key = currentKeys[i];
              if ( current[key] !== comparison[key] ) {
                  valuesEqual = false;
                  break;
              }
          }
          if (valuesEqual) duplicatesIndices.push(comparisonIndex);
          
      } // end for loop

  }); // end arr.forEach()

  return result;
}

document.addEventListener('DOMContentLoaded', function() {
  searchMovieData();
});





