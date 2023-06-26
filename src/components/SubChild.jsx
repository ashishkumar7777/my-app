import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../feature/showSlice'


function SubChild() {

      const dispatch = useDispatch()

  return (
    <div>
        <div>SubChild </div>
        <button onClick={() => dispatch(increment())}>click me</button>
    </div>
    
  )
}

export default SubChild