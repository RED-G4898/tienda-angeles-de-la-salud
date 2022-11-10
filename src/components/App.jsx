import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './content/Header';
import ItemListContainer from './content/ItemListContainer';

const App = () => {

  return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );

}

export default App;