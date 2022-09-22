import NavBar from './components/navbar/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Andrelo's Bar"} />
    </div>
  );
}

export default App;
