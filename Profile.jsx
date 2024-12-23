import React, { useState } from "react"
import type from 'prop-types'
const Profile = (props) => {
  console.log(props);
  let {details:{iname,icourse,fees,mode,photo,rating=0,duration="4months"},children} = props
  let username = "Narendra Mahalle"
  let [course,setCourse] =  useState("Webtech")
  let update = ()=>{
    setCourse("ReactJS")
  }
  // Code written in return is Task 2 code
  return (
    <>
        <div id="heading">My ID Card</div>
        <h3 id="user">Name : {username}</h3>
        <h3 id="course">Course : {course}</h3>
   <section className="Education">
     <p>Degree : Bachelor of Engineering</p>
     <p>Year of Passing : 2023</p>
     </section>
     <button id="btn" onClick={update}>Update course</button>
     
      <div className="ins">
     <h1>{iname}</h1>
     <div className="Imgcontainer">
     <img src={photo} alt={photo} />
     </div>
     <h3>Course : {icourse}</h3>
     <h3>Fees : {fees}</h3>
     <h3>Mode : {mode}</h3>
     <h3>Ratings : {rating}</h3>
     <h3> Duration : {duration}</h3>
     <div id="content">
     {children}
     </div> 
</div>
      </>
  )
}

export default Profile
// props validation
 
Profile.propTypes = {
  details: type.shape(
  {
    iname : type.string,
    icourse : type.string,
    mode : type.string,
    fees : type.number,
    photo : type.string,
    rating : type.number,
    duration : type.string
  }
)}