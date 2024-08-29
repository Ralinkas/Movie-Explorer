export const fetchMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c140798e1c40139931f57fcd0c8dc7eb');
  const data = await response.json();
  return data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview,
    liked: false,
  }));
};
