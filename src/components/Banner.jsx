import React from 'react'

const Banner = React.forwardRef((ref) => {
  return (
    <div ref={ref} style={{ width: '500px', border: '1px solid red' }}>
      
        <h1>hello</h1>
        
      </div>
  );
});

export default Banner;


