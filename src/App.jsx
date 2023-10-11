import Header from "./components/header"
import Register from "./components/register";
import Home from "./components/home"
import ViewDetails from "./components/viewdetails";
import {Routes,Route,Link} from 'react-router-dom'
import Footer from "./components/footer";
import Login from "./components/Login";
import PostaJob from "./components/postajob";


function App() {
  return (
    <>
   <Header/>
   <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={ <Register/>}/>
    <Route path="/PostaJob" element={<PostaJob/>}/>
    <Route path="/details" element={<ViewDetails/>}/>
   </Routes>
    <Footer/>
    </>
  ) 
}
export default App
 