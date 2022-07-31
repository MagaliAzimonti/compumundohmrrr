import './Item.css'
const Item = ({producto}) => {
    return (
        <li className='cards'>
            <h3>{producto.name}</h3>
            <img src={producto.img} alt={producto.name}></img>
            <p>{producto.price}</p>
            <p>{producto.stock}</p>
        </li>

    )
}

export default Item 