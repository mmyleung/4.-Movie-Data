let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  const tableContainer = document.querySelector('#movieDataTable');

  function displayMovieData() {

    let table = document.createElement('table');
    let titleRow = document.createElement('tr');
    let ratingRow = document.createElement('tr');
    let ratingScoreRow = document.createElement('tr');
    let yearRow = document.createElement('tr');
    let yearNmbRow = document.createElement('tr');
    let runtimeRow = document.createElement('tr');
    let runtimeMinRow = document.createElement('tr');
    let castRow = document.createElement('tr');
    let castNameRow = document.createElement('tr');
    let plotRow = document.createElement('tr');
    let plotOutlineRow = document.createElement('tr');
    for (let x = 0; x < Object.keys(movieData).length; x++) {
        let header = document.createElement('th');
        let textNode = document.createTextNode(Object.keys(movieData)[x]);
        header.appendChild(textNode);
        titleRow.appendChild(header);
        
        let cell1 = document.createElement('td');
        let rating = document.createTextNode('Rating');
        cell1.appendChild(rating);
        ratingRow.appendChild(cell1);

        let cell2 = document.createElement('td');
        let ratingScore = document.createTextNode(Object.values(movieData)[x].rating);
        cell2.appendChild(ratingScore);
        ratingScoreRow.appendChild(cell2);

        let cell3 = document.createElement('td');
        let year = document.createTextNode('Year');
        cell3.appendChild(year);
        yearRow.appendChild(cell3);

        let cell4 = document.createElement('td');
        let yearNmb = document.createTextNode(Object.values(movieData)[x].year);
        cell4.appendChild(yearNmb);
        yearNmbRow.appendChild(cell4);

        let cell5 = document.createElement('td');
        let runtime = document.createTextNode('Runtime');
        cell5.appendChild(runtime);
        runtimeRow.appendChild(cell5);

        let cell6 = document.createElement('td');
        let runtimeMin = document.createTextNode(Object.values(movieData)[x].runtime);
        cell6.appendChild(runtimeMin);
        runtimeMinRow.appendChild(cell6);

        let cell7 = document.createElement('td');
        let cast = document.createTextNode('Cast');
        cell7.appendChild(cast);
        castRow.appendChild(cell7);

        let cell8 = document.createElement('td');
        let castName = document.createTextNode(Object.values(movieData)[x].cast);
        cell8.appendChild(castName);
        castNameRow.appendChild(cell8);

        let cell9 = document.createElement('td');
        let plot = document.createTextNode('Plot');
        cell9.appendChild(plot);
        plotRow.appendChild(cell9);

        let cell10 = document.createElement('td');
        let plotOutline = document.createTextNode(Object.values(movieData)[x].plot);
        cell10.appendChild(plotOutline);
        plotOutlineRow.appendChild(cell10);


  }
  table.appendChild(titleRow);
  table.appendChild(ratingRow);
  table.appendChild(ratingScoreRow);
  table.appendChild(yearRow);
  table.appendChild(yearNmbRow);
  table.appendChild(runtimeRow);
  table.appendChild(runtimeMinRow);
  table.appendChild(castRow);
  table.appendChild(castNameRow);
  table.appendChild(plotRow);
  table.appendChild(plotOutlineRow);
  tableContainer.appendChild(table);
  const oldTable = document.querySelector("table");
  oldTable.parentNode.replaceChild(table, oldTable);

}

displayMovieData();

const form = document.getElementById('newMovieForm');

function handleForm(event) {
  event.preventDefault();
  const newTitle = document.getElementById("newTitle").value;
  const newRating = document.getElementById("newRating").value;
  const newYear = document.getElementById("newYear").value;
  const newRuntime = document.getElementById("newRuntime").value;
  const newCast = document.getElementById("newCast").value;
  const newPlot = document.getElementById("newPlot").value;
  
  var addNewMovie = {
    [newTitle]: {
      rating: newRating,
      year: newYear,
      runtime: newRuntime,
      cast: newCast,
      plot: newPlot,
    }
  };
        Object.assign(movieData, addNewMovie)
displayMovieData();
    }

form.addEventListener('submit',handleForm);

//to sort movies by alphabetical order, access variables in object then sort them by alphabetical order then return them in that order to pass
// through displayMovieData ();

const alphabeticalOrdered = Object.keys(movieData).sort().reduce(
  (obj, key) => {
    obj[key] = movieData[key];
    return obj;
  },
  {}
);
console.log(alphabeticalOrdered);

function displayMovieDataAlphabet() {

  let table = document.createElement('table');
  let titleRow = document.createElement('tr');
  let ratingRow = document.createElement('tr');
  let ratingScoreRow = document.createElement('tr');
  let yearRow = document.createElement('tr');
  let yearNmbRow = document.createElement('tr');
  let runtimeRow = document.createElement('tr');
  let runtimeMinRow = document.createElement('tr');
  let castRow = document.createElement('tr');
  let castNameRow = document.createElement('tr');
  let plotRow = document.createElement('tr');
  let plotOutlineRow = document.createElement('tr');
for (let x = 0; x < Object.keys(alphabeticalOrdered).length; x++) {
  let header = document.createElement('th');
  let textNode = document.createTextNode(Object.keys(alphabeticalOrdered)[x]);
  header.appendChild(textNode);
  titleRow.appendChild(header);
  
  let cell1 = document.createElement('td');
  let rating = document.createTextNode('Rating');
  cell1.appendChild(rating);
  ratingRow.appendChild(cell1);

  let cell2 = document.createElement('td');
  let ratingScore = document.createTextNode(Object.values(alphabeticalOrdered)[x].rating);
  cell2.appendChild(ratingScore);
  ratingScoreRow.appendChild(cell2);

  let cell3 = document.createElement('td');
  let year = document.createTextNode('Year');
  cell3.appendChild(year);
  yearRow.appendChild(cell3);

  let cell4 = document.createElement('td');
  let yearNmb = document.createTextNode(Object.values(alphabeticalOrdered)[x].year);
  cell4.appendChild(yearNmb);
  yearNmbRow.appendChild(cell4);

  let cell5 = document.createElement('td');
  let runtime = document.createTextNode('Runtime');
  cell5.appendChild(runtime);
  runtimeRow.appendChild(cell5);

  let cell6 = document.createElement('td');
  let runtimeMin = document.createTextNode(Object.values(alphabeticalOrdered)[x].runtime);
  cell6.appendChild(runtimeMin);
  runtimeMinRow.appendChild(cell6);

  let cell7 = document.createElement('td');
  let cast = document.createTextNode('Cast');
  cell7.appendChild(cast);
  castRow.appendChild(cell7);

  let cell8 = document.createElement('td');
  let castName = document.createTextNode(Object.values(alphabeticalOrdered)[x].cast);
  cell8.appendChild(castName);
  castNameRow.appendChild(cell8);

  let cell9 = document.createElement('td');
  let plot = document.createTextNode('Plot');
  cell9.appendChild(plot);
  plotRow.appendChild(cell9);

  let cell10 = document.createElement('td');
  let plotOutline = document.createTextNode(Object.values(alphabeticalOrdered)[x].plot);
  cell10.appendChild(plotOutline);
  plotOutlineRow.appendChild(cell10);


}
table.appendChild(titleRow);
table.appendChild(ratingRow);
table.appendChild(ratingScoreRow);
table.appendChild(yearRow);
table.appendChild(yearNmbRow);
table.appendChild(runtimeRow);
table.appendChild(runtimeMinRow);
table.appendChild(castRow);
table.appendChild(castNameRow);
table.appendChild(plotRow);
table.appendChild(plotOutlineRow);
tableContainer.appendChild(table);
const oldTable = document.querySelector("table");
oldTable.parentNode.replaceChild(table, oldTable);

}

const alphabeticalOrderBtn = document.getElementById("alphabetical");
alphabeticalOrderBtn.addEventListener("click",displayMovieDataAlphabet);

const sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", function handleChange(event) {
  console.log(event.target.value);
  if (event.target.value == "atoz") {
    displayMovieDataAlphabet();
  }
});

// function sort (event) {
//   if (event.target.value == atoz) {
// displayMovieDataAlphabet();
//   }
// }