import React from "react"
 import './filter.module.css'

export const Filter =({state, inputChange})=>{
return (<input
         type="search"
         name="search"
         id="search"
         value={state.filter}
         onChange={inputChange} />)
 }