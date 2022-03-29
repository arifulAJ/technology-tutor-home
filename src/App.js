


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
import ServicTec from "./pages/Services/ServicTec";
import Authprovider from "./component/common/privetRout/Authprovider";
import PrivetRout from "./component/common/privetRout/PrivetRout";
function App() {
  return (
    <div >
  <Authprovider>
        <BrowserRouter>
       <Header/>
    <Routes>
    <Route path="/" element={<Home />}>  </Route>
      <Route path="/home" element={<Home />}>  </Route>
      <Route path="/service" element={<PrivetRout><ServicTec/></PrivetRout>}>  </Route>
  
     
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/logout" element={<Register />}>  </Route>

    </Routes>
    <Footer/>
  </BrowserRouter>
  </Authprovider>
 

    </div>
  );
}

export default App;
