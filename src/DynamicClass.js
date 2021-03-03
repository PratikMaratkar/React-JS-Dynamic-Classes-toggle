
import React,{useState} from 'react';
import './MyToggle.css';

function DynamicClass() {

    const [myCondition,ChangeMyCondition] = useState(false)


    let myScreen = '';

    let myClasses = [];
    if(myCondition)
    {
        myScreen = (
            <div>
                <h1>This is my Div</h1>
            </div>
        );
        myClasses.push ('green');
        myClasses.push ('my_align');
    }
    else
    {
        myClasses.push ('red');
        myClasses.push ('my_align');
    }

const MyToggleFunc = () =>
{
    ChangeMyCondition(!myCondition);
}
      return (
       <div>
        <button className={myClasses.join(' ')} onClick={MyToggleFunc}>Toggle</button>
        {myScreen}
       </div>
      );
    }
    
export default DynamicClass;