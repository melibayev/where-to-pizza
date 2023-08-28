import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='navigation' element={<NavigationPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
