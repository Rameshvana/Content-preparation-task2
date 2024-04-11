import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TiStar } from "react-icons/ti";
import { MdFavoriteBorder,MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { FaDirections,FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { LiaInternetExplorer } from "react-icons/lia";




import './index.css'
import { getOneData } from '../../servises/context';
import HeaderComponent from "../Header";
import FooterComponent from '../Footer';

let menus = ['Overview','Menu','Reviews','Book a Table']


function DetailView() {
    const { id } = useParams();
    const [values, setvalues] = useState([])
    const [active,setactive] = useState(menus[0])
console.log(active)
    //alert(id)

    useEffect(() => {
        getOneData(id)
            .then((res) => {
                let data = res.data
                //alert('Get the Data successfully!')
                setvalues(data)
                //console.log(data)
            })
            .catch(() => {
                alert('Get the Data Failed!')
                //const {restarent_name,description,image,location,reviews,available,_id} = item
            })

    }, [])

    return (
      <div>
        <HeaderComponent/>
        <div className='detail-view-card'>

              <div className='detail-view'>
                <img src={values.image}  className="image-card1"/>
                <div className='restant-head'>
                  <strong className='name'>{values.restarent_name}</strong>
                  <span className='rating-card'>4.7<TiStar className="star-icon"/></span>  
                </div>
                <p className='lo'>Continental, Chinese,Indian...</p>
                <p className="lo">Location: Abu Dhabi Mall - Ground Floor - Abu Dhabi - United Emirates</p>
                <p className="time">Opens at 12 noon - 11: 30 pm (Today)</p>

                <div className='cards'>
                  <li className="item"><span><FaDirections className="detail-icon"/></span> Directions</li>
                  <li className="item"><span><IoMdShareAlt className="detail-icon"/></span> Share</li>
                  <li className="item"><span><MdFavoriteBorder className="detail-icon"/></span> Favorites</li>
                </div>
                <div className='menu'>
                  {menus.map((each) => <li  className={active == each ? ' menu_dynamic' : 'menu-item'} 
                  onClick={() => setactive(each)}>{each}</li>)}  
                </div>
                <p className='para'>About this Place</p>

                <div className='rame'>
                  <div>
                    <div className='average'>
                  <p className='para'>Average Cost</p>
                  <p className='para1'>AED 350 for two people (apprax) <br/>
                  Exclusive of applicable taxes and changes,if any <br/>
                  Digital payments accepted</p>  
                    </div>
                    <div className='more-infor'>
                  <p className='para'>More Info</p>
                  <div className='infor'>
                    <li className='a'><MdOutlineVerifiedUser className='verif'/>Indoor Seating</li>
                    <li className='a'> <MdOutlineVerifiedUser className='verif'/>Take away Availble </li>
                    <li className='a'> <MdOutlineVerifiedUser className='verif'/>Parking Available</li>
                    <li className='a'><MdOutlineVerifiedUser className='verif'/>Kids Safe </li>
                  </div>  
                    </div>
                  </div>

                  <div className='contact-card'>
                  <li className='con'><LuPhone className='verif'/>Call Us</li>
                  <hr/>
                  <li className='con'><FaDirections className='verif'/>Locate Us</li> 
                  <hr/>
                  <li className='con'><TfiEmail className='verif'/>Email Us</li>
                  <hr/>
                  <li className='con'>Follow Us on </li>
                  <li className='con'><LiaInternetExplorer className='verif'/> <FaFacebookSquare className='verif'/> <FaInstagram className='verif'/> <FaXTwitter className='verif'/></li>
                      
                  </div>
                </div>




                


              </div>
          </div>
        <FooterComponent/>  
      </div>
    )
}

export default DetailView;