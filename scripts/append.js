


function appendMovies(data) {

    // let search_loader = document.getElementById("loader")

    // search_loader.style.display = "none";

    let movie_div = document.getElementById("movie_grid");
    movie_div.innerHTML = null;

    data.forEach(function (el) {

        let div = document.createElement("div");

        let poster = document.createElement("img");
        poster.src = el.Poster;

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let year = document.createElement("p");
        year.innerText = el.Year;

        div.append(poster, title, year);
        movie_div.append(div);

    })
}





export default appendMovies 