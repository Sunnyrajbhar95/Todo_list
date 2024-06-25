import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtodo } from '../Store/Slice/Slice';
import "./Main.css"




export default function Form() {
   const[ data,setdata]=useState('');
   const eventhandler=(e)=>{
          setdata(e.target.value);
          //console.log(e.target.value);
   }
   const dispatch=useDispatch();
   const clickhandler=(e)=>{
     e.preventDefault()
     if(data!=='')
     {
          dispatch(addtodo(data));
     }
     setdata("")
   }

  return (
    <div>
         <form className='form1' >
              <input type='text' placeholder='Enter item......' value={data} onChange={eventhandler} className='form' required/>
              <button  onClick={clickhandler} className='btn'>Add</button>
         </form>
    </div>
  )
}
