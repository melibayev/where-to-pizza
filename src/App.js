import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ProductCard from './components/productCard/ProductCard';
import { BoolProvider } from './context/BoolContext';
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <BoolProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
          </Route>
            <Route path='/product' element ={<ProductCard/>} />
        </Routes>
      </BoolProvider>
    </BrowserRouter>
  );
}

export default App;
