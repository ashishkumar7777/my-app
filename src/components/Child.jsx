import React from 'react'
import SubChild from './SubChild'
import { useSelector } from 'react-redux'

function Child() {
    const data = useSelector((c) => {
        return c.show.value;
    })
  return (
    <div>
        <div>child {data} </div>
        <SubChild />
    </div>
    
    
  )
}

export default Child