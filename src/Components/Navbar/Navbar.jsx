import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Navbar( {userData , logOut} ) 
{
  return <>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid pt-3">

        <NavLink className="navbar-brand" to="/">Noxe</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {userData != null ?
          
          <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link "}   
                  to='home'>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'active nav-link active' : 'nav-link'} 
                  to='about'>About</NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link '} 
                  to='movies'>Movies</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'} 
                to='people'>people</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive? 'active nav-link' : 'nav-link'} to='tv'>
                  Tv.Show
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive? 'active nav-link' : 'nav-link'} to='profile'>
                  Profile
                </NavLink>
              </li>
             
              <li className="nav-item ms-auto">
                <div className='d-flex align-items-center'>
                  <NavLink className='nav-link' to='profile'>
                    <h6 className='border border-3 rounded-top rounded-bottom p-2 border-info me-3'>Hello {userData.first_name} <i className="fa-solid fa-hand"></i> </h6>
                  </NavLink>

                  <NavLink onClick={logOut} className={({ isActive }) => isActive? 'active nav-link' : 'nav-link'} to='login'>Logout</NavLink>
                </div>
              </li>

            </ul>

            
          </>
          : '' 

          }
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0 ">



            <li className='nav-item d-flex align-items-center'>
              <i className='fa-brands fa-facebook pe-3 fa-1x'></i>
              <i className='fa-brands fa-youtube pe-3 fa-1x'></i>
              <i className='fa-brands fa-google pe-3 fa-1x'></i>
              <i className='fa-brands fa-spotify pe-3 fa-1x'></i>
            </li>

            {userData == null ? 
              <>
                <li className='nav-item '>
                  <NavLink className={( {isActive} ) => isActive? 'active nav-link' : 'nav-link'} to='login'>Login</NavLink> 
                </li>

                <li className='nav-item'>
                  <NavLink className={( {isActive} ) => isActive? 'active nav-link' : 'nav-link'} to='register'>Register</NavLink>
                </li>
              
              </>

            : ''
            }            

          </ul>

        </div>
      </div>
    </nav>
  </>
}



// import React from 'react'
// import { Link,NavLink } from 'react-router-dom'

// export function Navbar( props ) 
// {
//   let {user , logOut} = props;
//   console.log(user);

//   return <>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">


//       <div className="container-fluid">


//         <Link className="navbar-brand" to='/'>Noxe</Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs- 
//         target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria- 
//         label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>


//         <div className="collapse navbar-collapse pt-3" id="navbarSupportedContent">

//           {/* {user != null ?  */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "}   
//                   to='home'>Home</NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} 
//                   to='about'>About</NavLink>
//               </li>

//               <li>
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} 
//                   to='movie'>Movies</NavLink>
//               </li>

//               {/* <li class="nav-item dropdown">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} to='movie' role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Movies
//                 </NavLink>
//                 <ul class="dropdown-menu">
//                   <li><a class="dropdown-item" onClick={() => changeCategory('popular')}> Popular</a></li>
//                   <li><a class="dropdown-item" onClick={() => changeCategory('top_rated')}>Top_rated</a></li>
//                   <li><a class="dropdown-item" onClick={() => changeCategory('upcoming') } to=''>Upcoming</a></li>
//                   <li><a class="dropdown-item" onClick={() => changeCategory('playing_now')} to=''>Playing Now</a></li>
//                 </ul>
//               </li> */}

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} 
//                  to='people'>people</NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} to="tv">Tv 
//                  Show</NavLink>
//               </li>

//               <li className="nav-item pointer-event">
//                 <span className='nav-link' onClick={logOut} >Logout</span>
//               </li>

//             </ul>  
//            :
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//               <li className="nav-item d-flex align-items-center">
//                 <i className='fa-brands fa-facebook pe-3 fa-1x'></i>
//                 <i className='fa-brands fa-youtube pe-3 fa-1x'></i>
//                 <i className='fa-brands fa-google pe-3 fa-1x'></i>
//                 <i className='fa-brands fa-spotify pe-3 fa-1x'></i>
//               </li>

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} to="login">Login</NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} to="register">Register</NavLink>
//               </li>

              
//             </ul>
//           {/* } */}
         

          
//         </div>
//       </div>
//     </nav>
//   </>
  
// }