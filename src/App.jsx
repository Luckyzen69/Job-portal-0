import Header from "./components/header"
import Register from "./auth/register";
import Home from "./components/home"
import ViewDetails from "./components/viewdetails";
import {Router,Routes,Route,Link} from 'react-router-dom'
import Footer from "./components/footer";
import Login from "./auth/Login";
import PostaJob from "./jobHandle/postajob";
import Apply from "./components/apply";
import Errore from "./handleError/error";
import SearchList from "./search/searchlist";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Charts from "./components/charts";

function App() {
  const [progress,setProgress] = useState(0);
  return (
    <>
   <Header/>
 
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        
   <Routes>
    <Route  path="/" element={<Home setProgress={setProgress}/>} />
    <Route  path="/home" element={<Home setProgress={setProgress}/>} />
    <Route path="/login" element={<Login setProgress={setProgress}/>} />
    <Route path="/charts" element={<Charts setProgress={setProgress}/>} />
    <Route path="/register" element={ <Register setProgress={setProgress}/>}/>
    <Route path="/PostaJob" element={<PostaJob setProgress={setProgress}/>}/>
    <Route path="/details" element={<ViewDetails setProgress={setProgress}/>}/>
    <Route path="/apply" element={<Apply setProgress={setProgress}/>}/>
    <Route path="/error" element={<Errore setProgress={setProgress}/>}/>
    <Route path="/searchlist" element={<SearchList setProgress={setProgress}/>} />
   </Routes>
    <Footer/>
    </>
  ) 
}
export default App
 