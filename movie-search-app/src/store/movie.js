import { Store } from '../core/eungb';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: []
});

export default store;
const APIKEY = '7035c60c';
export const searchMovies = async page => {
  store.state.page = page;
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${store.state.searchText}&page=${page}`);
  const { Search, totalResults } = await res.json();
  store.state.movies = [...store.state.movies, ...Search];

  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
};
