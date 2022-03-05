import React from 'react'
import './CourseCard.css'

// // void add(x,y=10){
    
// }
// /destructuring way 
 
function CourseCard({title="HTML", desc="default desc....."}) {
  return (
    <div className="course-card">
      <div className="course-img"></div>
      <h1>{title}</h1>
      <p>
       {desc}
      </p>
      <button>Enroll Now</button>
    </div>
  );
}


// direct using props 

// function CourseCard(props) {
//   return (
//     <div className="course-card">
//       <div className="course-img"></div>
//       <h1>{props.title}</h1>
//       <p>
//         Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
//         lorem lorem
//       </p>
//       <button>Enroll Now</button>
//     </div>
//   );
// }

export default CourseCard