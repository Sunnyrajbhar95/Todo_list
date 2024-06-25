import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo } from '../Store/Slice/Slice';
import "./Main.css"


export default function Todos() {
  const value=useSelector((state)=>state.counter.value);
    
  const dispatch=useDispatch() 
  
   

  return (
    <div>
         {
           value && value.map((data,index)=>{
           return <li key={index} className='list'>
               {data}
               <button onClick={()=>{
                 dispatch(deletetodo(index))} } className='btn1'>Delete</button>
           </li> 
          })
         }
    </div>
  )
}
