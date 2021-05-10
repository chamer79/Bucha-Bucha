import { useEffect, useState } from "react";
import axios from "axios"


function Flavor(props) {
  [flavors, setFlavors] = useState(null);

  useEffect(() => {
    const fetchFlavors = async () => {
    const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/flavors`;
    const config = {
      headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    };
    const resp = await axios.get(baseURL, config);
    setFlavors(resp.data.records);
    }
    fetchFlavors();
  }, [toggleFetch])
  

  if (!flavors) {
    return <h3>Loading...</h3>
  }
  
  return (
    <div>
      <h2>TEST TEST TEST</h2>
    </div>
  )
}

export default Flavor;



// export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/flavors`;
// export const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
//   }
// };