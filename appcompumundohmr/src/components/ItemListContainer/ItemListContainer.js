import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import { getProductosDeCompumundo } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({bienvenida}) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProductosDeCompumundo().then(productos => {
            setProducts(productos)
        })
    }, [])

    return (
        <>
        <h1>{bienvenida}</h1>
        {/* <ul>
            {productos.map(prod => <li key={prod.id}>{prod.name}</li>)}
        </ul> */}
        <ItemList productos={productos}/>
        </>
        
    )

}

export default ItemListContainer