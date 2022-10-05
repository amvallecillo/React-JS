import NavBar from './components/navbar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
    </>
  );
  
}

export default App;
