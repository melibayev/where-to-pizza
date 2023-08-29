import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ProductCard from './components/productCard/ProductCard';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
        </Route>
          <Route path='product/:id' element={<ProductPage />}/>
          <Route path='product' element = {<ProductCard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
