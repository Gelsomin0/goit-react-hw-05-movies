import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Credits = lazy(() => import('./Credits/Credits'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='credits' element={<Credits />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
};
