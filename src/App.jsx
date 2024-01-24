import Header from '../src/components/Header';
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import Error404 from '../src/components/Error404';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const greetingMessage = "Hola, bienvenido";

  return (
    <BrowserRouter>
      <Header />
      <Routes>

      <Route exact path='/' element={<ItemListContainer greeting={greetingMessage} />} />
      <Route exact path={'/category/:id'} element={<ItemListContainer />} />
      <Route exact path='/item' element={<ItemDetailContainer />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      <Route exact path='/category/jewelery' element={<ItemListContainer />} />
      <Route exact path='/category/mens-clothing' element={<ItemListContainer/>} />
      <Route exact path={'*'} element={<Error404 /> } />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;