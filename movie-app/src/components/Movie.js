import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImg, title, summary, movie, genres }) {
    return (
        <div key={id}>
            <img src={coverImg} alt="cover_img" />
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
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