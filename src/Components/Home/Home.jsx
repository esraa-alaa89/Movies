import axios from 'axios';
import React, { useState , useEffect } from 'react'
import { Movies } from '../Movies/Movies';
import { People } from '../People/People';
import { Tv } from '../Tv/Tv';

export function Home() 
{

  // let [trendingMovies , setTrendingMovies] = useState([]);

  // useEffect( () => {
  //   getTrendingMovies();
  // } , [])
  
  // async function getTrendingMovies()
  // {
  //   let {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=12d2603e1d1c1c838f0491e22a204b60`);
  //   setTrendingMovies(data.results);
  //   // console.log(data.results)
  // }
  
  return <>

    {/* <div className="row g-4 w-75 m-auto itemShadow p-1 mb-5">

      <div className="col-md-4">
        <hr className='w-25' />
        <h3>Trending</h3>
        <h3>movies</h3>
        <h3>to watch now</h3>
        <span className='text-muted'>most watched movies by day</span>
        <hr  />
      </div>

      {trendingMovies.slice(0,10).map( (item , index) =>
            <div key={index} className="col-md-2">
              <div className="item position-relative">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' alt="" />
                  <h4 className='py-3'>{item.title} {item.name}</h4>
                  <span className='position-absolute top-0 end-0 bg-info p-1'>{item.vote_average.toFixed(1)}</span>
              </div>
          </div>
      )}

    </div> */}


    <Movies/>

    <Tv/>

    <People/>
  </>
}