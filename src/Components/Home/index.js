
import { FcSearch } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";

import { useEffect,useState } from "react";
import './index.css'
import { getApiData } from "../../servises/context";
import RestarentCard from "../RestatentCard";
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";

function HomeComponent(){
   
  const [restarent,setrestarent] = useState([])
  
  console.log(restarent)
  const callThedata  = () => {
     getApiData()
     .then((res) => {
        //alert('Get the data successfully')
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
      <HeaderComponent/>
       

        <div className="bc">
          <h3 >Showing Results for Restaunts in Abu Dhabi</h3>
          <div className="count-card">
            <h3 className="place-card">Places:<span className="span-el">{restarent.length}</span></h3>
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
        <div>
        <ul className='restarents-card'>
          {restarent.map((item ) => (
            <RestarentCard item={item}  key={item.id}/>
          ))}
          </ul>
        </div>

        <FooterComponent/>
       </div> 
    )
}

export default HomeComponent