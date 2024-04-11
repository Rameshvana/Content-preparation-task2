import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { useState, useEffect,useRef } from 'react';
import { TiStar } from "react-icons/ti";
import { MdFavoriteBorder, MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { FaDirections, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { LiaInternetExplorer } from "react-icons/lia";




import './index.css'
import { getOneData, saveBookingsData } from '../../servises/context';
import HeaderComponent from "../Header";
import FooterComponent from '../Footer';

let menus = ['Overview', 'Menu', 'Reviews', 'Book a Table']


function DetailView() {
  const { id } = useParams();
  const [values, setvalues] = useState([])
  const [active, setactive] = useState(menus[0])
  console.log(active)

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const guestRef = useRef();
  const messageRef = useRef();


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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

function SaveRegistationData(){
    alert('triger')
    let data = {
      firstName : document.getElementById('firstname').value,
      lastName : document.getElementById('lastname').value,
      email : document.getElementById('email').value,
      phoneNo : document.getElementById('phone').value,
      date : document.getElementById('date').value,
      guest : document.getElementById('guest').value,
      message : document.getElementById('message').value
    }
    console.log(data)

    saveBookingsData(data)
    .then(() => {
      alert('Save data in database successfully!')
    })
    .catch(() => {
      alert('Save data in database Failed!')
    })
}  

function OverviewSection(){
  return(
    <div>
    <p className='para'>About this Place</p>
    <div className='rame'>
    <div>
      <div className='average'>
        <p className='para'>Average Cost</p>
        <p className='para1'>AED 350 for two people (apprax) <br />
          Exclusive of applicable taxes and changes,if any <br />
          Digital payments accepted</p>
      </div>
      <div className='more-infor'>
        <p className='para'>More Info</p>
        <div className='infor'>
          <li className='a'><MdOutlineVerifiedUser className='verif' />Indoor Seating</li>
          <li className='a'> <MdOutlineVerifiedUser className='verif' />Take away Availble </li>
          <li className='a'> <MdOutlineVerifiedUser className='verif' />Parking Available</li>
          <li className='a'><MdOutlineVerifiedUser className='verif' />Kids Safe </li>
        </div>
      </div>
    </div>

    <div className='contact-card'>
      <li className='con'><LuPhone className='verif' />Call Us</li>
      <hr />
      <li className='con'><FaDirections className='verif' />Locate Us</li>
      <hr />
      <li className='con'><TfiEmail className='verif' />Email Us</li>
      <hr />
      <li className='con'>Follow Us on </li>
      <li className='con'><LiaInternetExplorer className='verif' /> <FaFacebookSquare className='verif' /> <FaInstagram className='verif' /> <FaXTwitter className='verif' /></li>
    </div>
    </div>
  </div>
  )
}

function MenuSection(){
  return(
    <div>
      <h3>{values.restarent_name} Menu Card</h3>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/8e54c1122305693.60d6e086d2ef8.jpg
      ' className='menu-img'/>
    </div>
  )
}

function ReviewSection(){
  return(
    <div>
      <h3>review Section</h3>
    </div>
  )
}

function BookingSection(){
  return(
    <form onSubmit={handleSubmit(SaveRegistationData)}>
      <h4>Please select your booking details</h4>
    
      <div className='mom-input'>
        <div>
        <input type='text' placeholder='First Name' id='firstname' className='name-inputEl' {...register('firstname', { required: true })}/>
        {errors.firstname && <p className='error-para'>First name required input.. </p>}
        </div>
        <div>
        <input type='text' placeholder='Last Name' id='lastname' className='name-inputEl' {...register('lastname', { required: true })}/>
        {errors.lastname && <p className='error-para'>Last name required input.. </p>}
        </div>
      </div>
     
      <div className='mom-input'>
        <div>
        <input type='email' placeholder='Email' id='email' className='email-inputEl' {...register('email', { required: true })}/>
        {errors.email && <p className='error-para'>Email required input.. </p>}
        </div>
        <div>
         <input type='text' className='number-code' value='+91'/>
         <input type='text' placeholder='Phone' id ='phone' className='phone-inputEl' {...register('phone', { required: true })}/>
         {errors.phone && <p className='error-para'>Phone number required input.. </p>}
         </div> 

      </div>

      <h4>Enter guest details</h4>
      <div className='mom-input'>
        <div>
        <input type='date' placeholder='Select Date' id='date' className='name-inputEl' {...register('date', { required: true })}/>
        {errors.date && <p className='error-para'>Date required input.. </p>}
        </div>
        
        <select className='name-inputEl select-inputEl' id='guest' placeholder='AA'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select> 
      </div>

      <h4>Additional Requests</h4>
      <textarea rows={8} cols={50} className='textarea-El' placeholder='Type you message here..' id='message'/>
      <div className='book-btn'>
        <button type='submit' className='btn'>Book</button>
      </div>
    </form>
  )
}

function LodingMenu(){
  switch (active) {
    case menus[0]:
      return OverviewSection()
      break;
    case menus[1]:
      return MenuSection()
       break;
    case menus[2]:
      return ReviewSection()
      break;  
    case menus[3]:
      return BookingSection()
      break;
    default:
      break;
  }
}

  return (
    <div>
      <HeaderComponent />
      <div className='detail-view-card'>
        <div className='detail-view'>
          <img src={values.image} className="image-card1" />
          <div className='restant-head'>
            <strong className='name'>{values.restarent_name}</strong>
            <span className='rating-card'>4.7<TiStar className="star-icon" /></span>
          </div>
          <p className='lo'>Continental, Chinese,Indian...</p>
          <p className="lo">Location: Abu Dhabi Mall - Ground Floor - Abu Dhabi - United Emirates</p>
          <p className="time">Opens at 12 noon - 11: 30 pm (Today)</p>

          <div className='cards'>
            <li className="item"><span><FaDirections className="detail-icon" /></span> Directions</li>
            <li className="item"><span><IoMdShareAlt className="detail-icon" /></span> Share</li>
            <li className="item"><span><MdFavoriteBorder className="detail-icon" /></span> Favorites</li>
          </div>
          <div className='menu'>
            {menus.map((each) => <li className={active == each ? ' menu_dynamic' : 'menu-item'}
              onClick={() => setactive(each)}>{each}</li>)}
          </div>
          {LodingMenu()}












        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default DetailView;