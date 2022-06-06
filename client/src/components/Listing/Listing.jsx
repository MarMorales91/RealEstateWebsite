import React, {useState, useEffect} from 'react'
const axios = require('axios')

const Listing = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('/api');
          setData(response.property);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);
  
    return (
      <div className=' w-full h-screen bg-slate-600'>
        {data.map((properties)=>(
          <p key={properties._id}>{properties.location.address} {properties.location.zip}</p>
        ))}
      </div>
    )
}

export default Listing