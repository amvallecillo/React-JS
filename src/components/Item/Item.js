import { Link } from 'react-router-dom';
import './Item.css';

const Item= ({info})=>{
    return(
        <Link to={`/detalle/${info.Id}`} className='beer'>
            <img src={info.image} alt="" />
            <p> {info.title} </p>
            <p> {info.price} </p>
        </Link>
    );
}

export default Item;