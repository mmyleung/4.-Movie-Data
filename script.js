class movieData {
    constructor(title,rating,year,runtime,cast,plot) {
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.runtime = runtime;
        this.cast = cast;
        this.plot = plot;
    }
}

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

  const form = document.getElementById("newMovieForm");
  function handleForm() {

  }
  form.addEventListener("submit", handleForm);

  const newTitle = document.getElementById("newTitle").innerText;
  const newRating = parse.Float(document.getElementById("newRating").innerText);
  const newYear = parse.Int(document.getElementById("newYear").innerText);
  const newRuntime = parse.Int(document.getElementById("newRunTime").innerText);
  const newCast = document.getElementById("newCast").innerText;
  const newPlot = document.getElementById("newPlot").innerText;

  new movieData 