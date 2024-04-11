
import { FcSearch } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";

import { useEffect,useState } from "react";
import './index.css'
import { getApiData } from "../../servises/context";

function HomeComponent(){
   
  const [restarent,setrestarent] = useState([])
  
  console.log(restarent)
  const callThedata  = () => {
     getApiData()
     .then((res) => {
        alert('Get the data successfully')
        setrestarent(res.data)
     })
     .catch(() => {
        alert('Get data failed')
     })
  }

  useEffect(() => {
    callThedata(); 
  },[])

    return (
       <div>
        <div className='bg-card'>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className="a1"/>
            <div className="serch-card">
                <input type='text' placeholder='Search your Service here' className='input-service-serch'/>
                <FcSearch className="serch-icon"/>
            </div>
            <ul className="user">
              <li className="user-icon"><SiGoogletranslate/></li> 
              <li className="user-icon"><FaUser/></li>
              <li className="login">Log In</li>
              <li className="singup">Sing Up</li>
            </ul>
        </div>
        <div className="bc">
          <h3 >Showing Results for Restaunts in Abu Dhabi</h3>
          <div className="count-card">
            <h3 className="place-card">Places:<span className="span-el">10</span></h3>
            <div className="location">
             <IoLocationSharp className="location-icon"/>   
             <p>View on Map</p>
            </div>
            
          </div>  

        </div>
        <ul className="filters-card">
         <li className="filter">Filters</li>
         <li className="filter">Go Out</li>
         <li className="filter">Fine Dining</li>
         <li className="offer-filter"><span><BiSolidOffer className="offer-icon"/></span> Great Offers</li>
        </ul>


       </div> 
    )
}

export default HomeComponent