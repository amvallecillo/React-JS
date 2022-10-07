import Item from "../Item/Item";
import './ItemList.css';

const ItemList=({data=[]})=>{
    return(
        data.map(drinks=> <Item key={drinks.id} info={drinks} />)
    );
}

export default ItemList;