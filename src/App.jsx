import Header from "./components/header"
import Banner from "./components/banner"
import Category from "./components/category"
import Jobs from "./components/jobs"
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Category/>
    <Jobs/>
    <div className="text-center font-sans ">
     
      <div className="border-1 hover:ring-2 relative text-2xl capitalize ml-96 bg-primary text-white rounded p-4 m-5 w-44  flex-wrap  ">view more <BsFillArrowRightCircleFill className="absolute right-0 top-5  ml-4"/></div>
   
      <footer className="bg-primary font-sans text-center  p-4 text-white">
        <p>&copy; 2023 Jobs Portal. Designed By Lagzen Thakuri</p>
      </footer>
    </div>
    </>
  ) 
}
export default App
 