import React from 'react'
import { Link } from 'react-router-dom';
import useRoute from '../../Hooks/useRoute';

export function Movies() 
{
  let { trendingMovies , loading } = useRoute();

  
  return <>

    <div className="row g-4 w-75 m-auto itemShadow p-1 mb-5">

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
              <Link className='nav-link' to={`/movieDetails/${item.id}/${item.media_type}`}>
                <div className="item position-relative">
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' alt="" />
                    <h4 className='py-3'>{item.title} {item.name}</h4>
                    <span className='position-absolute top-0 end-0 bg-info p-1'>{item.vote_average.toFixed(1)}</span>
                </div>
              </Link>
              
          </div>
      )}

    </div>
  </>
}