import React,{useState} from 'react'
import StepOne from './step-1'
// import StepTwo from './step-2'
import StepThree from './step-3'
import StepFour from './step-4'
// // debugger;
// const StepMain = () =>
// {
//   const [btn,setBtn] = useState()
//   // debugger;
//   const sendData = (btn) =>{
//     console.log(btn)
//     setBtn(btn)
//   }
// }
// // // debugger;
const steps = 
    [
      {name: 'Step 1:  Enter Agency Information', component: <StepOne  />},
      // {name: 'Step 2: Enter Contact Information', component: <StepTwo/>},
      {name: 'Step 3: Review & Confirm', component: <StepThree/>},
      {name: 'Successfull', component: <StepFour/>},
    ]





export  {steps}