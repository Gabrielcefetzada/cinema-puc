
let movieDetailsContainer = document.querySelector("#movie-details");

const renderMovieDetails = () => {
    let movieTargetDetail = JSON.parse(
        localStorage.getItem("movieTargetDetail")
    );
    let atributesOfDetails = {
        title: movieTargetDetail.title,
        overview: movieTargetDetail.overview,
        release_date: movieTargetDetail.release_date,
        vote_average: movieTargetDetail.vote_average,
        poster_path: movieTargetDetail.poster_path,
    };

    let movieDetailsImage = document.createElement("img");
    movieDetailsImage.src = `https://image.tmdb.org/t/p/w500/${atributesOfDetails.poster_path}`;

    let movieDetailsTitle = document.createElement("h2");
    movieDetailsTitle.innerHTML = atributesOfDetails.title;

    let movieDetailsOverview = document.createElement("p");
    movieDetailsOverview.innerHTML = atributesOfDetails.overview;

    let movieDetailsReleaseDate = document.createElement("p");
    movieDetailsReleaseDate.innerHTML = `Data de lançamento: ${atributesOfDetails.release_date}`;

    let movieDetailsVoteAverage = document.createElement("p");
    movieDetailsVoteAverage.innerHTML = `Nota: ${atributesOfDetails.vote_average}`;

    let movieDetailsBackButton = document.createElement("button");
    movieDetailsBackButton.innerHTML = "Voltar";

    let movieDetailsBackA = document.createElement("a");
    movieDetailsBackA.setAttribute("href", "index.html");

    movieDetailsContainer.appendChild(movieDetailsImage);
    movieDetailsContainer.appendChild(movieDetailsTitle);
    movieDetailsContainer.appendChild(movieDetailsOverview);
    movieDetailsContainer.appendChild(movieDetailsReleaseDate);
    movieDetailsContainer.appendChild(movieDetailsVoteAverage);
    movieDetailsContainer.appendChild(movieDetailsBackA);
    movieDetailsBackA.appendChild(movieDetailsBackButton);
};

renderMovieDetails()