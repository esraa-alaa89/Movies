import axios from 'axios';
import Joi, { allow, string } from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Login( {savaUser} ) 
{

  let [user,setUser] = useState({
    email :'',
    password : ''
  })

  let [errorResponse,seterrorResponse] = useState('');
  let [loading,setLoading] = useState(false);
  let navigate = useNavigate();
  let [errorList,setErrorList] = useState([]);

  function addUser(e)
  {
    let myUser = {...user};
    myUser[ e.target.name ] = e.target.value;
    setUser(myUser);
    // console.log(myUser)
  }

  async function userData(e)
  {
    e.preventDefault();
    setLoading(true);

    let valid = validData();
    console.log(valid);
    if(valid.error != null)
    {
     console.log('3andy mashakel'); 
     setLoading(false);
     setErrorList(valid.error.details)
    }
    else
    {
      let {data} = await axios.post('https://sticky-note-fe.vercel.app/signin',user);
      setLoading(false);
      console.log(data);
      //the preveious line {data} return (message and token'encoded')
  
      if(data.message == 'success')
      {
        localStorage.setItem('token' , data.token);
        savaUser();
        navigate('/home');
        // console.log(data);
      }
      else
      {
        // console.log(data);
        seterrorResponse(data.message);
      }
    }
    
  }

  function validData()
  {
    let schema = Joi.object(
      {
        email : Joi.string().required().email( { tlds: {allow:['com','net']} } ) ,
        password : Joi.string().required().pattern( new RegExp(/^[a-z]{3,10}[0-9]/) )
      }
    )
    return schema.validate(user, {abortEarly : false} );
  }

  return <>

    <h2 className='text-center text-info'>Login Form</h2>
  
    <form onSubmit={userData}>

      <div className='my-3'>
        <label htmlFor="email">Email :</label>
        <input onChange={addUser} className='form-control mt-3' name='email' id='email' type="email" />
        {errorResponse == '' ? '' : <div className="alert alert-danger w-75 my-3">{errorResponse}</div> }

        {/* {errorList.length > 0 ? errorList.map( (error,index) => 
        <div key={index} className='alert alert-danger w-75 my-2'>
          {error.path[3] == 'email' ? error.message : '' } 
        </div> ) : ''
        } */}

      </div>

      <div className='my-3'>
        <label htmlFor="password">Password :</label>
        <input onChange={addUser} className='form-control mt-3' name='password' id='password' type="password" />
        {errorResponse == '' ? '' : <div className="alert alert-danger w-75 my-3">{errorResponse}</div> }
        
        {/* {errorList.length > 0 ? errorList.map( (error,index) => 
        <div key={index} className='alert alert-danger w-75 my-2'>
          {error.path[4] == 'password' ? error.message : '' } 
        </div> ) : ''
        } */}

      </div>

      {errorList.length > 0 ? errorList.map( (error,index) => <div key={index} className='alert alert-danger w-75 py-2 my-4'>{error.message}</div> ) : ''}

      {loading ?  

        <button className='btn btn-info btn-md my-2' type='submit'> 
          <i className='fa-solid fa-spinner fa-spin'></i> 
        </button> 
        :
        <button className='btn btn-info btn-md my-2' type='submit'>Login</button> 
      }
        
      
    </form>
  
  
  </>
}
