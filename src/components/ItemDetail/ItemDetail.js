
const ItemDetail =({data})=>{
    return (
        <div className="contenedor">
        <div className="detail">
            <img className="detail_image" src={data.image} alt=""  />
            <div className="content">
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
            </div>


        </div>



        </div>
    );
}

export default ItemDetail;