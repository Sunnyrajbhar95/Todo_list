// import { useDispatch, useSelector } from "react-redux"
import Form from "./component/Form";
import Todos from "./component/Todos";
import "./App.css"




export default function App() {
  // const value=useSelector((state)=>state.counter.value);
  // console.log(value)
  

  return (
    <div className="app">
      <div className="text">Todo List</div>
      <div className="form"> 
         <Form/>
      </div>
      <Todos/>
    </div>
  )
}
