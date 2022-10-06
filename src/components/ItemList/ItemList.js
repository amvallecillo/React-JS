import Item from "../Item/Item";
import './ItemList.css';

const ItemList=({data=[]})=>{
    return(
        data.map(beers=> <Item key={beers.id} info={beers} />)
    );
}

export default ItemList;