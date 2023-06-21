import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementbyValue } from '../feature/showSlice';


function SubChild() {

    const dispatch = useDispatch();

    const data = useSelector((c) => {
        return c.show.value;
    })

  return (
    <div>
        <div>SubChild {data}</div>
        <button onClick={() => dispatch(increment())}> click me</button>
        <button onClick={() => dispatch(incrementbyValue(10))}> Increase by value</button>
    </div>
    
  )
}

export default SubChild