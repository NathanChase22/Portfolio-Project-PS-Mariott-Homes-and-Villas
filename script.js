// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  // use .filter() method to loop through entries and return in a new array ones that match type
  let filteredPlaces = PLACES.filter((place) => place.type == typePreference);

  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  const newDiv = document.createElement("div");
  // Step 2: Add the col class to the new div element
  newDiv.classList.add("col");

  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
  const markup = `
  <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
    <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
    <div class="card-body">
      <h5 class="card-title">${place.name}</h5>
      <p class="card-text">${place.location}</p>
    </div>
  </div>
  `
  newDiv.innerHTML = markup;
  
  // Step 4: Return the element
  return newDiv;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id of "recommendations" in a variable
  const element = document.getElementById("recommendations");
  // Step 2: Clear the "recommendations" innerHTML
  element.innerHTML = "";
  // Step 3: Loop through the filteredPlaces array
  filteredPlaces.forEach((place) => {
    // Step 4: Create a card for each place using the createCard function
    let placeCard = createCard(place);
    // Step 5: Add/append each card to the recommendations DOM element
    element.append(placeCard);
  });
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array and find match
  const found = PLACES.find((place) => place.name == placeName);
  return found;
}
