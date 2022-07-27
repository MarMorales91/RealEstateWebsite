import React, {useState, useEffect} from 'react'

function Show() {
 const [data, setData] = useState([])

 useEffect(() => {
  async function getRecords() {
    const response = await fetch(`/record`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setData(records);
  }

  getRecords();

  return;
}, [data.length]);

  return(
    <div>
      {data.allProperties.map((e)=>{
        return (
          <p key={e._id}>{e.address}</p>
        )
      })}
    </div>
  )
  
}

export default Show