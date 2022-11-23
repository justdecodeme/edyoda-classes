import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PostAdd from "./pages/PostAdd"
import PostDetails from "./pages/PostDetails"
import PostEdit from "./pages/PostEdit"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App;
