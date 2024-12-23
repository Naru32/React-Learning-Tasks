// Props-drilling task's parent component

// import React from 'react'
// import Child from './Child';

// const Parent = (props) => {
//     console.log(props);
   
//   return (
//     <>
//     <Child Pinfo={props}/>
//     </>
//   )
// }
// export default Parent

// Task 2 -- Profile of Udemy
import React, { useState } from 'react'
import Profile from './Profile'

const Parent = () => {

  let [institute,setInstitute] = useState({
    iname : "Udemy",
    mode : "Online",
    fees : 5000,
    icourse : "Fullstack",
    photo : "https://yt3.googleusercontent.com/8kmI-l1suZxgItpAe359N-jJCBct1PXe99e04kTit8XWE3D_pBnctd6pEiwwmapHbDMmC21E45Q=s900-c-k-c0x00ffffff-no-rj",
    // rating : 4.3
  })
  return (
    <>
 <Profile details = {institute}>
    <h4>OUR MANTRA IS QUALITY</h4> 
    <p>Training all those Aspiring for successful IT career</p>   
    </Profile>
    </>
  )
}
export default Parent