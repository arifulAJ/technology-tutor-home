


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Resister/Login';


import Home from './pages/Home/Home';
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Register from "./pages/Resister/Register";
function App() {
  return (
    <div >
  
        <BrowserRouter>
       <Header/>
    <Routes>
    <Route path="/" element={<Home />}>  </Route>
      <Route path="/home" element={<Home />}>  </Route>
  
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/logout" element={<Register />}>  </Route>

    </Routes>
    <Footer/>
  </BrowserRouter>

 

    </div>
  );
}

export default App;
