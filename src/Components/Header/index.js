import { useParams,useNavigate } from 'react-router-dom';

import { FcSearch } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { FaUser } from "react-icons/fa";


import './index.css'

function HeaderComponent(){
  const navigate = useNavigate()

  return(
    <div>
      <div className='bg-card'>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className="a1" onClick={() => (navigate('/'))}/>
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
    </div>
  )  
}

export default HeaderComponent;