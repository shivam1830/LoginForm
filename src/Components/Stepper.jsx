import React, { useState, useEffect } from 'react'
import MultiStep from './Multi';
import {steps} from './Stepmain';
import StepOne from './step-1'



const Stepper = (props) => {
  
  //  useEffect(() => {
  //   console.log(props.data)
  //  },[])
  // const [btn,setBtn] = useState(true)
  // // debugger;
  // const sendData = (btn) => {
  //   console.log(btn)
  //   setBtn(btn)
  // }
        return (
          <div className="containerWra">
              <MultiStep   steps={steps}/>
              
          </div>
        )
              
}

export default Stepper;
