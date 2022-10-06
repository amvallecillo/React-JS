import './Item.css';

const Item= ({info})=>{
    return(
        <a href='' className='beer'>
            <img src={info.image} alt="" />
            <p> {info.title} </p>
        </a>
    );
}

export default Item;