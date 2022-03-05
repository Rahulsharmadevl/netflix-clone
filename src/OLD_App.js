import './App.css';
import CourseCard from './CourseCard'
import React ,{useState}  from 'react'

function App() {

  // states in react 
  // just another way to create a variable in react
  // concept of React HOOKS - [ functional based ]

  // state variable
  // RULES - You cannot mutate/ change the state variable directly.
  const [count, setCount] = useState(0);
  // const [show, setShow] = useState(0);
  // const [page, handlePage] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      {/* <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button> */}

      {/* condition ?  true : false */}
      <button onClick={()=>{ count<15 ? setCount(count+1) :  setCount(count =15) }}>+</button>
      <button onClick={()=>{ count > 0 ? setCount(count - 1) : setCount(count =0) }}>-</button>
     
      {/* props - properties  */}
      {/* add(10,30); */}
      {/* <CourseCard />
      <CourseCard />
      <CourseCard />

      <CourseCard
        title="CSS"
        desc="CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS "
      />
      <CourseCard title="JavaScript" desc="JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript "/> */}

      {/* <CourseCard title="React" />
      <CourseCard title="Node" />
      <CourseCard title="MongoDB" /> */}
    </div>
  );
}

export default App;
