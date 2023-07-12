
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'
import Login from './Components/Login/Login'
import Home from "./Pages/Home";
import Soultion from "./Components/Solution";
import Blog from "./Components/Blog";
import DetailBlog from './Components/DetailBlog'

const App = () => {
  const location = useLocation();
  const isLogin =
    location.pathname == "/login";
  return (
    <div>
      {!isLogin && <Navbar />}
      <Routes>

        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path={`/blog/page/:id`} element={<Blog />} />
        <Route path="/solution" element={<Soultion />} />
        <Route path='/detail' element={<DetailBlog/>}/>

      </Routes>
      
    </div>
  );
};

export default App;
