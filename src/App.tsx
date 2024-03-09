import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//import Search from "./pages/search.tsx"
//import Cart from "./pages/cart.tsx"
import { lazy,Suspense } from "react"
import Loader from "./componenets/loader.tsx"

const Home = lazy(()=> import("./pages/Home.tsx"))
const Search = lazy(()=>import("./pages/search.tsx"))
const Cart = lazy (()=> import("./pages/cart.tsx"))

const App = () => {
  return (
    <Router>   //wrapper tag
      {/*header*/}
      <Suspense fallback={<Loader/>}>
      <Routes>  {/*//wrapper tag*/}
        <Route  path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      </Suspense>
    </Router>
  )
}

export default App