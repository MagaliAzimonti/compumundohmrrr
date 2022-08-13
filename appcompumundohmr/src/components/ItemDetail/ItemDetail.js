/* import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
 */
import './ItemDetail.css'
const ItemDetail = ({ name, description, img }) => {
    return (
        <div>
        <h1 className="titleDetail text-light">{name}</h1>
        <p className="pDetail text-light">{description}</p>
        <img className="imageDetail"src={img}/>
        </div>
    )
}

export default ItemDetail 