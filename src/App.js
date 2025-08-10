
import './App.css';
import CartIcon from './Components/Cart/CartIcon';

import Dishes from './Components/DishesComponent/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <AllCategories />
      <CartIcon />
      <Dishes />
    </div>
  );
}

export default App;
