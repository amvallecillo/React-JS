import "./ItemListContainer.css";
import Title from "../Title/Title";
import ItemCount from "../ItemCount";


const ItemListContainer = ()=>{

    const onAdd=(cantidad)=>{
        console.log(`Compraste ${cantidad} unidades`)
    }

    return (
        <>
        <Title greeting='Bienvenidos a Andrelos Bar' />
        <ItemCount initial={1} stock={10} onAdd={onAdd}  />
        </>
    );
}

export default ItemListContainer