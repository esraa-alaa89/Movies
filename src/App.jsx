import logo from './logo.svg';
import {createBrowserRouter , Navigate , RouterProvider} from 'react-router-dom';

import './App.css';

import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Movies } from './Components/Movies/Movies';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';
import { People } from './Components/People/People';
import { Tv } from './Components/Tv/Tv';
import { Profile } from './Components/Profile/Profile';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { NotFound } from './Components/NotFound/NotFound';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';


function App() 
{

  useEffect( () => {
    if(localStorage.getItem('token') != null)
    {
      savaUserData()
    }
  } , [])

  let [userData , setUserData] = useState(null);

  function savaUserData()
  {
    let encodedData = localStorage.getItem('token');
    let decodedData = jwtDecode(encodedData);
    setUserData(decodedData);
  }

  function logOut()
  {
    localStorage.removeItem('token');
    setUserData(null);
    return <Navigate to='/login' />
  }

  function ProtecteRouter(props)
  {
    if( (userData == null) && (localStorage.getItem('token') == null) )
    {
      return <Navigate to='/login' />
    }
    else
    {
      return props.children
    }
  }

  let routes = createBrowserRouter( [
    { path:'/', element:<Layout userData={userData} logOut={logOut} />, 
    children:
    [
      {path:'/', element: <ProtecteRouter> <Home/> </ProtecteRouter>},
      {path:'home', element: <ProtecteRouter> <Home/> </ProtecteRouter> },
      {path:'about', element: <ProtecteRouter> <About/> </ProtecteRouter> },
      {path:'movies', element: <ProtecteRouter> <Movies/> </ProtecteRouter> },
      {path:'movieDetails/:id/:mediaType', element: <ProtecteRouter>  <MovieDetails/> </ProtecteRouter>},
      {path:'people', element: <ProtecteRouter> <People/> </ProtecteRouter> },
      {path:'tv', element: <ProtecteRouter> <Tv/> </ProtecteRouter> },
      {path:'profile', element: <ProtecteRouter> <Profile userData={userData} /> </ProtecteRouter> },
      {path:'login', element: <Login savaUser = {savaUserData} />},
      {path:'register', element: <Register/>},
      {path:'*', element:<NotFound/>}
    ] }
  ] )


  return (
    <> 
      <RouterProvider router={routes}/>
    </>

  );
}

export default App;
