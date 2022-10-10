import NavBar from './components/navbar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
  
}

export default App;
