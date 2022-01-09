import PropTypes from "prop-types";

function Movie({ id, coverImg, title, summary, movie, genres }) {
    return (
        <div key={id}>
            <img src={coverImg} alt="cover_img" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {(movie.hasOwnProperty("genres")) ? genres.map((g) => (
                    <li key={g}>{g}</li>
                )) :
                    null
                }
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;