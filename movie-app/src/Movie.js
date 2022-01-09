function Movie({ id, coverImg, title, summary, movie }) {
    return (
        <div key={id}>
            <img src={coverImg} alt="cover_img" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {(movie.hasOwnProperty("genres")) ? movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                )) :
                    null
                }
            </ul>
        </div>
    );
}
export default Movie;