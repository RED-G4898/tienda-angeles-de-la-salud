import './app.css';
import Header from './content/Header';
import ItemListContainer from './content/ItemListContainer';

const App = () => {

  return (
      <>
        <Header />
        <ItemListContainer greeting={"¡Bienvenido Usuario!"} />
      </>
  );

}

export default App;