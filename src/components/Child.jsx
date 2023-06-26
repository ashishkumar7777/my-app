import React from 'react'
import SubChild from './SubChild'
import { useSelector, useDispatch } from 'react-redux';
import { incrementByValue } from '../feature/showSlice';

function Child() {

  const dispatch = useDispatch();
   const data = useSelector((e) => {
    return e.show.value;
   })
  return (
    <div>
        <div>childd {data}</div>
        <button onClick={() => dispatch(incrementByValue(10))}>increment by value</button>
        <SubChild />
    </div>
    
    
  )
}

export default Child