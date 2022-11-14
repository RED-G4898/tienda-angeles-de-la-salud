import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './content/Header';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Cart from './content/Cart';

const App = () => {

  return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/product/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </>
  );

}

export default App;