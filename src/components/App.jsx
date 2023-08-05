import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "page/Home";
import Movies from "page/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}/>
      </Route>
    </Routes>
  );
};
