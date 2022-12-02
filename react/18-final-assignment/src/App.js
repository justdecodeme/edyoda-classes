import './App.scss';
import Header from "./components/header"
import Footer from "./components/footer"
import Login from "./pages/login"
import ProductAdd from "./pages/product-add"
import ProductList from "./pages/products-list"
import Account from "./pages/account"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Login /> */}
        {/* <ProductAdd /> */}
        <ProductList />
        <Account />
      </main>
      <Footer />
    </div>
  );
}

export default App;
