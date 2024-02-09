import React from 'react'
import { useEffect } from 'react'
import $ from "jquery";

export function About() 
{
  useEffect( () => {
    $(".test").hide(1000);
  } , [])
  
  return (
    <div>
      <h2 className='test'>about</h2>
    </div>
  )
}
