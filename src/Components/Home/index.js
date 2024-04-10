
import { FcSearch } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import './index.css'

function HomeComponent(){
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


       </div> 
    )
}

export default HomeComponent