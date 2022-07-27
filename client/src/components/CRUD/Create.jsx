import React, {useState} from 'react'
import axios from 'axios'


function Create() {
    const [form, setForm] = useState({
        address: '',
        state: '',
        zip: 0,
        price: 0,
        bedroom: 0,
        bathroom: 0,
        sqft: 0,
        lotSqft: 0,
        description: '',
        overview: '',
        amenities: [{
            type: ''
        }]
    }) 


    function updateForm(value){
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      };

    // This function will handle the submission.
 async function onSubmit(e) {
    e.preventDefault();
    await axios.post('/record/add', form)   
      .then((res) => {
      console.log(res.data)
      })
      .catch((error) => {
      console.log(error)
      });
  }




  return (
    <div className=' pt=[80px]'>
        <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="address">Address</label>
         <input
           type="text"
           className="form-control"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="state">state</label>
         <input
           type="text"
           className="form-control"
           id="state"
           value={form.state}
           onChange={(e) => updateForm({ state: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="zip">Zip</label>
         <input
           type="number"
           className="form-control"
           id="zip"
           value={form.zip}
           onChange={(e) => updateForm({ zip: e.target.value })}
         />
       </div>

       <button type="submit">Submit</button>
       </form>

    </div>
  )
}

export default Create