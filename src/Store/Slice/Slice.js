

import { createSlice} from "@reduxjs/toolkit"
 let initialState={
     value:[]
 }

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
     addtodo:(state,actions)=>{
           state.value.push(actions.payload)
           console.log(actions.payload)

        
     },
     deletetodo:(state,actions)=>{
           state.value=state.value.filter((data,index)=>{
            return index!==actions.payload
           })
     }
    }
})
export const {addtodo,deletetodo }=counterSlice.actions
export default counterSlice.reducer;