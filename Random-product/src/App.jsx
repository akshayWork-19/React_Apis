import './App.css'
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import Random from './components/Random';
import ProductDetails from './components/ProductDetails';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/random' element={<Random />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
