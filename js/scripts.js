var elNameForm = document.querySelector('.js-name-form');
var elGenreForm = document.querySelector('.js-genre-form');
var elYearForm = document.querySelector('.js-year-form');
var elNameInput = document.querySelector('.js-name-input');
var elNameOutput = document.querySelector('.js-name-output');
var elYearForm = document.querySelector('.js-year-form');
var elYearInput = document.querySelector('.js-year-input');
var elYearOutput = document.querySelector('.js-year-output');
var elSelector = document.querySelector('.js-selector');
var elGenreOutput = document.querySelector('.js-genre-output');



elNameForm.addEventListener('submit', function(evt) {
  evt.preventDefault();


       var kinoo = kinolar.filter(function (kinoName) {
         return kinoName.title.includes(elNameInput.value);
      });




  var itemFragment = document.createDocumentFragment();
  elNameOutput.innerHTML = '';
  for (var i = 0; i < kinoo.length; i++) {
    var outputItem = document.createElement('li');
    outputItem.classList.add('list-group-item');
    var outputTitle = document.createElement('h4');
    outputTitle.textContent = kinoo[i].title;
    var outputYear = document.createElement('p');
    outputYear.textContent = kinoo[i].year;
    var outputGenre = document.createElement('p');
    outputGenre.textContent = kinoo[i].genres;

    outputItem.appendChild(outputTitle);
    outputItem.appendChild(outputGenre);
    outputItem.appendChild(outputYear);
    itemFragment.appendChild(outputItem);
  }

  elNameOutput.appendChild(itemFragment);
});

/* ================================================================================================================ */

/* ================================================================================================================ */

elYearForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var kinoYear = kinolar.filter(function (kinoyear) {
    return elYearInput.value == kinoyear.year;
  });

  var itemYearFragment = document.createDocumentFragment();
  elYearOutput.innerHTML = '';
  for (var i = 0; i < kinoYear.length; i++) {
    var outputItem = document.createElement('li');
    outputItem.classList.add('list-group-item');
    var outputTitle = document.createElement('h4');
    outputTitle.textContent = kinoYear[i].title;
    var outputYear = document.createElement('p');
    outputYear.textContent = kinoYear[i].year;
    var outputGenre = document.createElement('p');
    outputGenre.textContent = kinoYear[i].genres;

    outputItem.appendChild(outputTitle);
    outputItem.appendChild(outputGenre);
    outputItem.appendChild(outputYear);
    itemYearFragment.appendChild(outputItem);
  }

  elYearOutput.appendChild(itemYearFragment);
});

/* =============================================================================================================== */

var generes = [];
var arr = [];
var kinoOption = kinolar.filter(function (kinoGenre) {
  return generes.push(kinoGenre.genres);
});


for (var i = 0; i < generes.length; i++) {
  for (var j = 0; j < generes[i].length; j++) {
    if (!arr.includes(generes[i][j])) {
      arr.push(generes[i][j]);
    }
  }
}





elSelector.addEventListener('change', function() {
  var veer = genreOption.innerHTML;
  genreOption.innerHTML = this.value;

  var kinoGenre = kinolar.filter(function (kinogenre) {
    return veer == kinogenre.genres;
  });



  var itemGenreFragment = document.createDocumentFragment();
  elYearOutput.innerHTML = '';
  for (var i = 0; i < kinoGenre.length; i++) {
    var outputItem = document.createElement('li');
    outputItem.classList.add('list-group-item');
    var outputTitle = document.createElement('h4');
    outputTitle.textContent = kinoGenre[i].title;
    var outputYear = document.createElement('p');
    outputYear.textContent = kinoGenre[i].year;
    var outputGenre = document.createElement('p');
    outputGenre.textContent = kinoGenre[i].genres;

    outputItem.appendChild(outputTitle);
    outputItem.appendChild(outputGenre);
    outputItem.appendChild(outputYear);
    itemGenreFragment.appendChild(outputItem);
  }

  elGenreOutput.appendChild(itemGenreFragment);
});

var elOptionFragment = document.createDocumentFragment();
for(var i = 0; i < arr.length; i++) {
  var genreOption = document.createElement('option');
  genreOption.value = arr[i];
  genreOption.textContent = arr[i];
  elOptionFragment.appendChild(genreOption);
}
elSelector.appendChild(elOptionFragment);
