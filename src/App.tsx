import Header from './components/Header'
import { Navigate, Route, Routes } from "react-router-dom";
import { AllProducts } from './pages/AllProducts';
import { Categories } from './pages/Categories';
import { OneItem } from './pages/OneItem';
import {CategoryItems} from './pages/CategoryItems';
import {Basket} from './pages/Basket';



function App() {

  
  return (
    <>
      <Header />
      <main>
        <Routes>
        {/* Create your routes here. Don't forget to install the router package! */}
          <Route index element={<Navigate to="/products"/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/products/:id" element={<OneItem/>}/>
          <Route path="/categories/:id" element={<CategoryItems/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
