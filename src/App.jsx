// © 2026 Lawrence Nakrosis. All rights reserved.
import Header from './components/Header'
import Product from './components/Product';
import { CartContextProvider } from './store/CartContext';
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Product />
    </CartContextProvider>
  );
}

export default App;
