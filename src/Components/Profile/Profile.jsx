import React from 'react'

export function Profile( {userData} ) 
{
  return (
    <>
      <h2 className='text-center text-info'>My profile</h2>
      <div className='w-50 m-auto mt-3 bg-light text-info py-3 ps-3 border border-3 border-info rounded-top rounded-bottom'>
        <h4>First Name is : {userData?.first_name} </h4>
        <h4>Last Name is : {userData?.last_name} </h4>
        <h4>Age is : {userData?.age} </h4>
        <h4>Email is : {userData?.email} </h4>
      </div>
    </>
  )
}











// import React from 'react'

// export function Profile({userData}) 
// {
//     let {first_name , last_name , age , email} = userData;
//   return (
//     <>
//         <h4>Name : {first_name} {last_name} </h4>
//         <h4>Age : {age} </h4>
//         <h4>Email : {email} </h4>
//     </>
//   )
// }
