import { LiaInternetExplorer } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




import './index.css'

function FooterComponent(){
  const navigate = useNavigate()
  return(
    <div className='footer-bg'>
  
  <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className="a1" onClick={() => (navigate('/'))}/>
      <div className="fotter-card">
      <div className='company'>
        <li className='main-item'>Company</li>
        <li className='ite'>About us</li>
        <li  className='ite'>Teams & conditions</li>
        <li  className='ite'>Privacy policy</li>
        <li  className='ite'>Anti-discrimination policy</li>
        <li  className='ite'>FD impact</li>
        <li className='ite'>Careeres</li>
      </div>
            
      <div className='company'>
        <li className='main-item'>For customers</li>
        <li className='ite'>Categories near you </li>
        <li  className='ite'>Blog</li>
        <li  className='ite'>Contact us</li>
      </div>

                  
      <div className='company'>
        <li className='main-item'>For partners</li>
        <li className='ite'>Register as professional</li>
      </div>

                  
      <div className='company'>
        <li className='social-menu'>Social Links</li>
        <li className='conf'><FaLinkedinIn className='social-icon'/> <FaFacebookSquare className='social-icon'/> <FaInstagram className='social-icon'/> <FaXTwitter className='social-icon'/></li>
      </div>
      </div>

    </div>
  )  
}

export default FooterComponent;