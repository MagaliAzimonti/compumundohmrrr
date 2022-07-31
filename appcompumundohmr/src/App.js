import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad de productos añadidos es' ${quantity}`)
  }
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer bienvenida='Bienvenido a Compumundo HiperMegaRed'/>
      <Counter stock={40} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
