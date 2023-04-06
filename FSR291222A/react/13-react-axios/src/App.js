import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom"

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
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/post/add" element={<PostAdd />} />
            <Route path="/post/details/:postId" element={<PostDetails />} />
            <Route path="/post/edit/:postId" element={<PostEdit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
