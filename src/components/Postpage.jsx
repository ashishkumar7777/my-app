import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function Postpage() {
    const params = useParams();
    const[postdata, setPostdata] = useState([]);
    const[loading, setLoading] = useState(true)
    
    
   
    useEffect( () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then(res => res.json())
        .then(data => setPostdata(data))

        setLoading(false)
    }, [])


  return (
    loading? <h1>loading...</h1> : <div>
    <h1>{postdata.title}</h1>
    <p>{postdata.body}</p>
</div>
    
  )
}

export default Postpage