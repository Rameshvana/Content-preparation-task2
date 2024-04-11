import { TiStar } from "react-icons/ti";
import './index.css'
import { Link } from "react-router-dom";

function RestarentCard(props){
    const {item} = props
    const {restarent_name,description,image,location,reviews,available,_id} = item

    return(
     
       <li className='card'>
        <Link to={`/detailView/${_id}`} className="link_item">
        <div className='restarent-card'>
            <img src={image}  className="image-card"/>
            <div className='restant-head'>
            <strong>{restarent_name}</strong>
            <span className='rating-card'>4.7<TiStar className="star-icon"/></span>  
            </div>
            <div className="q"><p>Continental, Chinese,Indian...</p><p>AED 50-100 for two</p></div>
            <p className="loca">Abu Dhabi Mall</p>
            <div className="available">
             <p className="time">Opens at 12 noon</p>
             <p className="km">7 kms</p>   
            </div>
  
        </div>
        </Link>
      </li>
    )
}

export default RestarentCard