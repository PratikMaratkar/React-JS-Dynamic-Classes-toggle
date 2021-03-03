import React,{useState} from 'react';
import './Pratik.css';


function App() {

const[myCondition,ChangeMyCondition]=useState(false)

let MyDiv = '';

let style = {
  backgroundColor : 'red',
  color : 'white',
  margin : '50px',
};


const ToggleMyDivFunc =() =>
{
 let myCondition2 = myCondition;
 ChangeMyCondition(!myCondition2)

}

if(myCondition)
{
  MyDiv = (
    <div className="MyDiv">
      <h5>Current status : {myCondition}</h5>
    </div>
  )

  style.backgroundColor = 'green';

}
else
{
  style.backgroundColor = 'red';
}

  return (
   <div>
      
      <button style={style} onClick={ToggleMyDivFunc}>Toggle button</button>


      {MyDiv}
   </div>
  );
}

export default App;