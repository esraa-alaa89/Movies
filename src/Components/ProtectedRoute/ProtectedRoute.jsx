import React from 'react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute(props) 
{
    // console.log(props);
    // if( !localStorage.getItem('userToken') )
    // {
    //     console.log("yes");
    //     return <Navigate to='/login'/>
    // }
    // else
    // {
    //     console.log("no");
    //     return props.Children;
    // }

    <h4>hello in Protected Route</h4>
}
