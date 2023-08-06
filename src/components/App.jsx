import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "page/Home";
import Movies from "page/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Credits from "./Credits/Credits";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='credits' element={<Credits/>} />
          <Route path='reviews' element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
