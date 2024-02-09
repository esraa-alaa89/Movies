import axios from "axios";
import { useEffect, useState } from "react";

export default function useRoute()
{
    let [trendingMovies , setTrendingMovies] = useState([]);
    let [loading , setLoading] = useState(false);

    useEffect( () => {
      getTrendingMovies();
    } , [])
    
    async function getTrendingMovies()
    {
      setLoading(true);
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=12d2603e1d1c1c838f0491e22a204b60`);
      setTrendingMovies(data.results);
      setLoading(false);
      // console.log(data.results)
    }

    return { trendingMovies , loading };
}

