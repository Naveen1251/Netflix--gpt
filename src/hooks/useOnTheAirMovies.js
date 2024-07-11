import { useDispatch, useSelector } from "react-redux";
import { addOnTheAirMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useOnTheAirMovies = () => {
    const dispatch = useDispatch();
    const onTheAirMovies = useSelector((store) => store.movies.onTheAirMovies);
    const getOnTheAirMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?&page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addOnTheAirMovies(json.results));
  }

  useEffect(()=>{
   !onTheAirMovies && getOnTheAirMovies();
  },[]);
};

export default useOnTheAirMovies