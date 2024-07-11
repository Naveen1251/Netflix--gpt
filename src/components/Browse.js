import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useOnTheAirMovies from '../hooks/useOnTheAirMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch  = useSelector((store) => store.gpt.showGptSerch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useOnTheAirMovies();
  console.log(showGptSearch)


  return (
    <div>
      <Header/>
      {  showGptSearch ? ( <GptSearchPage/>) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )  }
    </div>
  )
}

export default Browse