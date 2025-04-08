import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import CategoryPage from './pages/category/CategoryPage';
import Search from './pages/search/Search';
import ShopPage from './pages/shop/ShopPage';
import SingleProduct from './pages/shop/productDetails/SingleProduct';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page Without Navbar & Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages with Navbar & Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Layout Component to Wrap Pages
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This dynamically renders the current page */}
      <Footer />
    </>
  );
};

export default App;
