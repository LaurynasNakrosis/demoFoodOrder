// © 2026 Lawrence Nakrosis. All rights reserved.
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header'
import Product from './components/Product';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Product />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
