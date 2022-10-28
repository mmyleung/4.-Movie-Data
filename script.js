

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
function displayMovieData () {
 for (let x = 0; x < Object.keys(movieData).length; x++) {
document.write("<table id = displayTable>");
document.write("<tr>");
document.write("<td colspan = 3>");
document.write(Object.keys(movieData)[x]);
document.write("</td>");
//table row for title
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan = 1>Rating</td>");
//table column for Rating
document.write("<td colspan = 1>Year</td>");
//table column for Year
document.write("<td colspan = 1>Runtime</td>");
//table column for Runtime
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan = 1>");
document.write(Object.values(movieData)[x].rating);
document.write("</td>");
//table column for movieData rating
document.write("<td colspan = 1>");
document.write(Object.values(movieData)[x].year);
document.write("</td>");
//table column for movieData year
document.write("<td colspan = 1>");
document.write(Object.values(movieData)[x].runtime);
document.write("</td>");
//table column for movieData runtime
document.write("</tr>");
document.write("<br></br>");
document.write("<tr>");
document.write("<td colspan = 3>Cast</td>");
//table row for Cast
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan = 3>");
document.write(Object.values(movieData)[x].cast);
document.write("</td>");
//table row for movieData cast
document.write("</tr>");
document.write("<br></br>"); 
document.write("<tr>");
document.write("<td colspan = 3>Plot</td>");
//table row for Plot
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan = 3>");
document.write(Object.values(movieData)[x].plot);
document.write("</td>");
//table row for movieData plot
document.write("</tr>");
document.write("</table>");
document.write("<br></br>");
  }
}
  displayMovieData();
