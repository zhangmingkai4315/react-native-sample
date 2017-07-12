import React from 'react'
import Menu from './menu'

const Department = ({title,names})=>{
    return (<div><h1>{title}</h1>
    {names.map((name,i)=>
        <Menu key={i} name={name}/>
    )}</div>)
}

export default Department;