import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function MovieDetails() 
{
  let [itemDetails , setItemDetails] = useState({});

  let parameter = useParams();

  useEffect( () => 
  {
    getItemDetails();
  } , [])

  async function getItemDetails() 
  {

    // let {data} = await axios.get(`https://api.themoviedb.org/3/${parameter.mediaType}/${parameter.id}/day?api_key=12d2603e1d1c1c838f0491e22a204b60`);

    // https://api.themoviedb.org/3/${parameter.mediaType}/${parameter.id}?api_key=12d2603e1d1c1c838f0491e22a204b60&language=en-US

    let {data} = await axios.get(`https://api.themoviedb.org/3/${parameter.mediaType}/${parameter.id}?api_key=12d2603e1d1c1c838f0491e22a204b60&language=en-US`);

    setItemDetails(data);
    console.log(data);
  }
  return (
    <>

      <h2 className='text-center text-info'>Main Details</h2>
      <div className="row">
        <div className="col-md-3">
          {parameter.mediaType == 'person' ?
            <img className='w-100' src={`https://image.tmdb.org/t/p/w500${itemDetails.profile_path}`} alt=""/>
            :
            <img className='w-100' src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`} alt=""/>
          }
        </div>

        <div className="col-md-9">
          <h4>{itemDetails.title} {itemDetails.name}</h4>
          <p className='text-muted'>{itemDetails.overview} {itemDetails.biography}</p>
          <ul className=''>
            <li className='bg-info'>{`Vote Avarage : ${itemDetails.vote_average}`}</li>
            <li className='bg-info'>{`Vote Count : ${itemDetails.vote_count}`}</li>
          </ul>
        </div>
      </div>
    </>
   
  )
}
