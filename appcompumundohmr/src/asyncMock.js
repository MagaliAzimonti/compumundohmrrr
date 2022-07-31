const productos = [
    {id: '1', name:'Exo Smart M33', price:'$60.624', category:'Notebook', img: 'https://http2.mlstatic.com/D_NQ_NP_860042-MLA46302991834_062021-O.webp', stock:'15'},
    {id: '2', name:'Exo Smart L37e Plus', price:'$84.389', category:'Notebook', img: 'https://correoargentino.vtexassets.com/arquivos/ids/194058/image-f691d359dcae4925aa29e7588abb3c45.jpg?v=637798421163300000', stock:'10'},
    {id: '3', name:'HP 15-dy2061la', price:'$116.999', category:'Notebook', img:'https://ar-media.hptiendaenlinea.com/catalog/product/4/0/40P49LA-2_T1632518914.png', stock:'5'},
    {id: '4', name:'Lenovo IdeaPad 14IGL05', price:'$89.699', category:'Notebook', img:'https://www.resinformatica.com.ar/Temp/App_WebSite/App_PictureFiles/Items/4290_800.jpg', stock:'10'}
]

export const getProductosDeCompumundo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}