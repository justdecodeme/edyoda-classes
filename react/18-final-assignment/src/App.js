import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom"

import './App.scss';
import Header from "./components/header"
import Footer from "./components/footer"
import Login from "./pages/login"
import ProductAdd from "./pages/product-add"
import ProductsList from "./pages/products-list"
import Account from "./pages/account"
import Dashboard from "./pages/dashboard"
import PageNotFound from "./pages/page-not-found"
import AuthContext from "./contexts/auth-context"

const API_URL = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const login = (name) => {
    setUser(name);
  };
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  console.log('data: ', data)

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ user, data, login, logout }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product-add" element={<ProductAdd />} />
              <Route path="/products-list" element={<ProductsList />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
