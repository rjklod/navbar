
import './App.css';
import Navbarr from './Navbar';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className='cart-items'>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
      
    
    </div>
  );
}

export default App;
